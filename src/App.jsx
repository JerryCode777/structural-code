import Navbar from "./components/Navbar/Navbar"
import { useState } from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </>
  )
}

export default App