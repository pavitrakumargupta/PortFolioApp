import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { profileData } from '../data/profile'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = profileData.experience

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional journey and the projects I've worked on
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker">
                <FiBriefcase />
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-meta">
                    <span className="exp-company">
                      <FiBriefcase size={16} />
                      {exp.company}
                    </span>
                    <span className="exp-location">
                      <FiMapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="exp-period">
                      <FiCalendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience




