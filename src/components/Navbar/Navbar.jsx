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
    <div className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <div>
        <Logo />

        <div>
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <ToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        <div>
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