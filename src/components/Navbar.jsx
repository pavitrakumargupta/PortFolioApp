import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun, FiMenu, FiX, FiFileText } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { profileData } from '../data/profile'
import './Navbar.css'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' }
]

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = () => setMenuOpen(false)

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={handleNav}>
          <span className="logo-mark">PG</span>
          <span className="logo-text">Pavitra<span>.dev</span></span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href={profileData.social.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            <FiFileText size={16} />
            <span>Resume</span>
          </a>

          <motion.button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>

          <button
            className="nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-mobile-link ${active === link.id ? 'active' : ''}`}
                onClick={handleNav}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profileData.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-link resume"
              onClick={handleNav}
            >
              <FiFileText size={16} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
