import DarkModeButton from "./DarkModeButton"
import MenuItems from "./MenuItems"
import ToggleButton from "./ToggleButton"
import { useState } from "react"
import Button from "../Button/Button"
import Logo from "./Logo"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-cyan-100 dark:bg-slate-800 text-slate-700  dark:text-yellow-200">
      <div>
        <Logo />

        <div>
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <ToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {/* menu items */}

        <div className={`flex items-center flex-grow
        ${isOpen ? "dark:bg-slate-500 traslate-x-0": "-traslate-x-full"} lg:traslate-x-0`}>
          <MenuItems />
          <div>
            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar   