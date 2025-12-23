import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiArrowUp } from 'react-icons/fi'
import { profileData } from '../data/profile'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
