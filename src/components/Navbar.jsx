import { motion } from 'framer-motion'
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="logo-text">Portfolio</span>
        </motion.div>

        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
        </div>

        <div className="nav-actions">
          <motion.button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
