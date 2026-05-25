import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
  SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiGithub, SiExpress, SiNextdotjs,
  SiVuedotjs, SiTailwindcss, SiBootstrap, SiRedux,
  SiNestjs, SiFirebase, SiVercel,
  SiNetlify, SiTensorflow, SiGoogle, SiSequelize, SiAmazon
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
  "AWS (S3, ECS)": <SiAmazon />,
  "AWS": <SiAmazon />,
  "Render": <FaCloud />,
  "Vercel": <SiVercel />,
  "Netlify": <SiNetlify />,
  
  // AI & Automation
  "Whisper (Speech-to-Text)": <FaMicrophone />,
  "Whisper": <FaMicrophone />,
  "Coqui TTS": <FaMicrophone />,
  "Gemini API": <FaRobot />,
  "OCR Pipelines": <FaImage />,
  "AI Workflow Automation": <FaRobot />,
  "Stable Diffusion": <FaImage />,
  "ComfyUI": <FaImage />,
  "TensorFlow": <SiTensorflow />,
  "TensorFlow Lite": <SiTensorflow />,
  "Google Apps Script": <SiGoogle />
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = profileData.skills.categories.map(category => ({
    ...category,
    skills: category.skills.map(skill => {
      const skillName = typeof skill === 'string' ? skill : skill.name
      return {
        name: skillName,
        icon: iconMap[skillName] || <FaCode />
      }
    })
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
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
