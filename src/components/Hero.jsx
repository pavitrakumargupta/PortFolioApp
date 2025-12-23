import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiFileText, FiDownload } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import { profileData } from '../data/profile'
import coverPhoto from '../assets/coverPhoto.jpg'
import profilePhoto from '../assets/profilePhoto.jpg'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="cover-photo-container"
          variants={itemVariants}
        >
          <motion.div
            className="cover-photo"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={coverPhoto} 
              alt="Cover" 
              className="cover-image"
              // style={{objectFit:'contain'}}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="profile-section"
          variants={itemVariants}
        >
          <motion.div
            className="profile-photo-container"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="profile-photo">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
          </motion.div>

          <motion.h1
            className="hero-name"
            variants={itemVariants}
          >
            {profileData.personal.name}
          </motion.h1>

          <motion.p
            className="hero-title"
            variants={itemVariants}
          >
            {profileData.personal.title}
          </motion.p>

          <motion.p
            className="hero-summary"
            variants={itemVariants}
          >
            {profileData.personal.summary}
          </motion.p>

          <motion.div
            className="hero-links"
            variants={itemVariants}
          >
            <motion.a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
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
              className="social-link github"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={24} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={profileData.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link resume"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiFileText size={24} />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="mouse"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
