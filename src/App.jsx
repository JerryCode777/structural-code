import Category from "./components/Category/Category"
import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Newsletter from "./components/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"
import { useState } from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero />
      <Category />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App