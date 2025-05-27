import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="text-xl">
        {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default DarkModeButton