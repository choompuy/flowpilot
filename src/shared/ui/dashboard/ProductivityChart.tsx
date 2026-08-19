import { useEffect, useId, useRef, useState } from 'react'

type ChartPoint = {
  label: string
  value: number
}

interface Props {
  data: ChartPoint[]
  graphColor?: string
  textColor?: string
  pointRadius?: number
  lineWidth?: number
}

export const ProductivityChart = ({ data, graphColor = 'currentColor', textColor = 'currentColor', pointRadius = 4, lineWidth = 2 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({
    width: 400,
    height: 200
  })
  const gradientId = useId()

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  const { width, height } = size
  const padding = {
    top: 16,
    right: 20,
    bottom: 35,
    left: 35
  }

  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const values = data.map((item) => item.value)

  const dataMin = Math.min(...values)
  const dataMax = Math.max(...values)

  const range = dataMax - dataMin || 1

  const minValue = dataMin - range * 0.15
  const maxValue = dataMax + range * 0.15

  const points = data.map((item, index) => {
    const normalized = (item.value - minValue) / (maxValue - minValue)
    const x = padding.left + (index / (data.length - 1)) * chartWidth
    const y = padding.top + chartHeight - normalized * chartHeight

    return {
      x,
      y,
      label: item.label,
      value: item.value
    }
  })

  const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
  const areaPath = `${linePath} L ${points.at(-1)?.x} ${height - padding.bottom} L ${points[0]?.x} ${height - padding.bottom} Z`

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={graphColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={graphColor} stopOpacity="0" />
          </linearGradient>

          <clipPath id={`clip-${gradientId}`}>
            <rect
              x={padding.left - pointRadius}
              y={padding.top - pointRadius}
              width={chartWidth + pointRadius * 2}
              height={chartHeight + pointRadius * 2}
            />
          </clipPath>
        </defs>

        {[0, 25, 50, 75, 100].map((percent) => {
          const y = padding.top + (chartHeight * percent) / 100
          const value = Math.round(maxValue - ((maxValue - minValue) * percent) / 100)

          return (
            <g key={percent}>
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke={graphColor} opacity="0.08" />
              <text x={padding.left - 10} y={y + 4} textAnchor="end" fontSize="11" fill={textColor} opacity="0.5">
                {value}
              </text>
            </g>
          )
        })}

        <g clipPath={`url(#clip-${gradientId})`}>
          <path d={areaPath} fill={`url(#${gradientId})`} />
          <path d={linePath} fill="none" stroke={graphColor} strokeWidth={lineWidth} />
          {points.map((point) => (
            <circle key={point.label} cx={point.x} cy={point.y} r={pointRadius} fill={graphColor} />
          ))}
        </g>

        {points.map((point) => (
          <text key={point.label} x={point.x} y={height - 10} textAnchor="middle" fontSize="12" fontWeight={400} fill={textColor} opacity="0.5">
            {point.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
