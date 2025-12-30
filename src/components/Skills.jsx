import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
  SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiGithub, SiExpress, SiNextdotjs,
  SiVuedotjs, SiTailwindcss, SiBootstrap, SiRedux,
  SiNestjs, SiFirebase, SiVercel,
  SiNetlify, SiTensorflow, SiGoogle, SiSequelize
} from 'react-icons/si'
import { 
  FaMicrophone, FaImage, FaCloud, FaPlug, FaCode,
  FaServer, FaRobot
} from 'react-icons/fa'
import { profileData } from '../data/profile'
import './Skills.css'

const iconMap = {
  // Frontend
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "React.js": <SiReact />,
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "React Native": <SiReact />,
  "Expo": <FaCode />, // Using code icon as fallback
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "Tailwind CSS": <SiTailwindcss />,
  "Redux": <SiRedux />,
  "React Context API": <SiReact />,
  
  // Backend
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "Express": <SiExpress />,
  "NestJS": <SiNestjs />,
  "REST APIs": <FaPlug />,
  "WebSockets": <FaPlug />,
  
  // Databases
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "Sequelize": <SiSequelize />,
  "Firebase": <SiFirebase />,
  
  // Cloud & DevOps
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  // "AWS (S3, ECS)": <SiAmazonaws />,
  // "AWS": <SiAmazonaws />,
  "Render": <FaCloud />,
  "Vercel": <SiVercel />,
  "Netlify": <SiNetlify />,
  
  // AI & Automation
  "Whisper (Speech-to-Text)": <FaMicrophone />,
  "Coqui TTS": <FaMicrophone />,
  "Stable Diffusion": <FaImage />,
  "ComfyUI": <FaImage />,
  "TensorFlow": <SiTensorflow />,
  "Google Apps Script": <SiGoogle />
}

const Skills = () => {
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

  const skillCategories = profileData.skills.categories.map(category => ({
    ...category,
    skills: category.skills.map(skill => ({
      ...skill,
      icon: iconMap[skill.name] || <SiReact />
    }))
  }))

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

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial={isMobile ? "visible" : "hidden"}
        animate={shouldAnimate || isMobile ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: isMobile ? `${skill.level}%` : 0 }}
                          animate={(shouldAnimate || isMobile) ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-icons-grid"
          variants={itemVariants}
        >
          {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
            <motion.div
              key={index}
              className="skill-icon-card"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill.icon}
              <span className="icon-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
