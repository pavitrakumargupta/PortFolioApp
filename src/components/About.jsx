import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiServer, FiCpu } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import { profileData } from '../data/profile'
import './About.css'

const iconMap = {
  code: <FiCode />,
  cpu: <FiCpu />,
  server: <FiServer />,
  database: <FiDatabase />,
  bot: <FaRobot />,
  cloud: <FiCloud />,
  mobile: <FiSmartphone />
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = profileData.about.services.map(service => ({
    ...service,
    icon: iconMap[service.icon] || <FiCode />
  }))

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">What I Do</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            I transform ideas into reality through code, creating digital experiences
            that make a difference.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="about-content"
          variants={itemVariants}
        >
          <div className="about-text">
            <h3>About Me</h3>
            {profileData.about.aboutText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
