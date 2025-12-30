import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiArrowUp } from 'react-icons/fi'
import { profileData } from '../data/profile'
import './Footer.css'

const Footer = () => {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" })
  
  // On mobile, show immediately; on desktop, use scroll animation
  const shouldAnimate = !isMobile && isInView

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={shouldAnimate || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-info">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-description">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
            <div className="footer-links">
              <motion.a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={24} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={`mailto:${profileData.personal.email}`}
                className="footer-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail size={24} />
                <span>Email</span>
              </motion.a>
              <motion.a
                href={profileData.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFileText size={24} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} {profileData.personal.name}. Built with React & Framer Motion
            </p>
            <motion.button
              className="scroll-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer




