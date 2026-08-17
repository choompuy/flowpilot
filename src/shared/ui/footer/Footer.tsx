export const Footer = () => {
  return (
    <footer className="py-16 bg-surface" id="footer">
      <div className="container mx-auto px-6">
        <div className="border border-border rounded-2xl p-10 shadow-sm">
          <div className="flex flex-col gap-10">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-lg font-bold mb-6 text-text-primary">Product</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#updates" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6 text-text-primary">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6 text-text-primary">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#blog" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#docs" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#help" className="text-text-secondary transition-all duration-300 hover:text-accent">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border text-sm text-text-muted">
              <p>© 2026 FlowPilot. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
