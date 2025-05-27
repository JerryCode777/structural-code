import DarkModeButton from "./DarkModeButton"
import ToggleButton from "./ToggleButton"
import { useState } from "react"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <div>
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <ToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  )
}

export default Navbar   