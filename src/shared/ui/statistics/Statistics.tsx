export const Statistics = () => {
  return (
    <section className="py-24" id="statistics">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50K+</div>
            <div className="text-base text-text-secondary">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">1200+</div>
            <div className="text-base text-text-secondary">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">2M+</div>
            <div className="text-base text-text-secondary">Completed Tasks</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-base text-text-secondary">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
