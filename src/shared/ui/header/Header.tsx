import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { Sun, Moon, Menu } from 'lucide-react'
import logo from '@/assets/flowpilot-logo.png'

export const Header = ({ isDarkMode, onToggleDarkMode }: { isDarkMode: boolean; onToggleDarkMode: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="h-18 bg-surface-elevated backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={logo} alt="FlowPilot" className="h-8 w-auto" />
          <div className="logo-name inline text-lg font-bold">
            <span className="text-text-primary">Flow</span>
            <span className="text-accent">Pilot</span>
          </div>
        </div>

        <nav className={`max-sm:hidden flex gap-8 ${isMenuOpen ? 'flex' : ''}`}>
          <a href="#product" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
            Product
          </a>
          <a href="#solutions" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
            Solutions
          </a>
          <a href="#pricing" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
            Pricing
          </a>
          <a href="#resources" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="small" onClick={onToggleDarkMode}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button variant="outline" href="#login" className="max-sm:hidden">
            Login
          </Button>
          <Button variant="primary" href="#get-started" className="max-sm:hidden">
            Get Started
          </Button>
          <button className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-text-primary" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-18 left-0 right-0 bg-surface-elevated flex-col p-6 gap-4 border-b border-border transition-all duration-300 ${isMenuOpen ? 'flex translate-y-0 opacity-100' : 'hidden -translate-y-full opacity-0'}`}
      >
        <a href="#product" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
          Product
        </a>
        <a href="#solutions" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
          Solutions
        </a>
        <a href="#pricing" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
          Pricing
        </a>
        <a href="#resources" className="text-text-secondary font-medium transition-all duration-300 hover:text-accent">
          Resources
        </a>
        <Button variant="outline" href="#login">
          Login
        </Button>
      </nav>
    </header>
  )
}
