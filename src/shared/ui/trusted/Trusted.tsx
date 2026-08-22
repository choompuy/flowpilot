import aegisflow from '@/assets/trusted/aegisflow.png'
import orbitixAi from '@/assets/trusted/orbitix-ai.png'
import nodeforge from '@/assets/trusted/nodeforge.png'
import prismpay from '@/assets/trusted/prismpay.png'
import synaplink from '@/assets/trusted/synaplink.png'
import vectorize from '@/assets/trusted/vectorize.png'
import globalatlas from '@/assets/trusted/globalatlas.png'
import cipherstar from '@/assets/trusted/cipherstar.png'

export const Trusted = () => {
  const companies = [
    { name: 'AegisFlow', icon: aegisflow },
    { name: 'Orbitix AI', icon: orbitixAi },
    { name: 'NodeForge', icon: nodeforge },
    { name: 'PrismPay', icon: prismpay },
    { name: 'SynapLink', icon: synaplink },
    { name: 'Vectorize', icon: vectorize },
    { name: 'GlobalAtlas', icon: globalatlas },
    { name: 'CipherStar', icon: cipherstar }
  ]

  return (
    <section className="py-16 bg-surface border-t border-b border-border" id="trusted">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-text-secondary font-medium">Trusted by teams worldwide</p>
        <div className="flex flex-wrap justify-center items-center mt-12 gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex flex-row items-center gap-3 group cursor-pointer">
              <img
                className="h-8 md:h-12 w-auto grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                src={company.icon}
                alt={company.name}
              />
              <span className="text-xl md:text-3xl text-text-secondary font-semibold transition-all duration-300 group-hover:text-accent">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
