export const Showcase = () => {
  return (
    <section className="py-24 bg-surface" id="showcase">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 text-text-primary">Powerful dashboard for your team</h2>
          <p className="text-lg text-text-secondary leading-relaxed">Manage projects, track progress and automate workflows.</p>
        </div>
        <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-30 font-semibold text-text-primary">Marketing</div>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full transition-all duration-300" style={{ width: '85%' }}></div>
              </div>
              <div className="w-10 text-right font-semibold text-accent">85%</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-30 font-semibold text-text-primary">Development</div>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full transition-all duration-300" style={{ width: '62%' }}></div>
              </div>
              <div className="w-10 text-right font-semibold text-accent">62%</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-30 font-semibold text-text-primary">Research</div>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full transition-all duration-300" style={{ width: '45%' }}></div>
              </div>
              <div className="w-10 text-right font-semibold text-accent">45%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
