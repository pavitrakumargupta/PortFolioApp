import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { profileData } from '../data/profile'
import coverPhoto from '../assets/coverPhoto.png'
import profilePhoto from '../assets/profilePhoto.jpg'
import './Hero.css'

const roles = [
  'Full Stack Engineer',
  'AI Automation Engineer',
  'React & Node.js Developer',
  'Product-minded Builder'
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  // Mouse-driven 3D tilt for the profile visual
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 18 })

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const projectCount = profileData.projects?.length || 0
  const techCount = new Set(
    (profileData.skills?.categories || []).flatMap((c) =>
      (c.skills || []).map((s) => (typeof s === 'string' ? s : s.name))
    )
  ).size

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: `${projectCount}+`, label: 'Projects Built' },
    { value: `${techCount}+`, label: 'Technologies' }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
  }
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-grid-overlay" aria-hidden="true"></div>

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-copy">
          <motion.div className="availability" variants={item}>
            <span className="availability-dot"></span>
            Available for new opportunities
          </motion.div>

          <motion.p className="hero-eyebrow" variants={item}>
            Hi, I&apos;m
          </motion.p>

          <motion.h1 className="hero-name" variants={item}>
            {profileData.personal.name}
          </motion.h1>

          <motion.div className="hero-role" variants={item}>
            <span className="hero-role-prefix">I build as a</span>
            <span className="hero-role-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="hero-role-text"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p className="hero-summary" variants={item}>
            Full Stack Engineer with 3+ years building scalable web, mobile, and
            AI-powered products — from automation systems and speech-to-text
            pipelines to production-grade application architecture.
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a
              href={profileData.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={item}>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={`mailto:${profileData.personal.email}`}
              aria-label="Email"
              className="icon-btn"
            >
              <FiMail size={20} />
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          variants={item}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ perspective: 1000 }}
        >
          <motion.div className="visual-card" style={{ rotateX, rotateY }}>
            <div className="visual-glow"></div>
            <img src={coverPhoto} alt="" className="visual-cover" aria-hidden="true" />
            <div className="visual-photo">
              <div className="visual-ring"></div>
              <img src={profilePhoto} alt={profileData.personal.name} />
            </div>
            <span className="float-chip chip-1">React</span>
            <span className="float-chip chip-2">Node.js</span>
            <span className="float-chip chip-3">AI / LLM</span>
            <span className="float-chip chip-4">Next.js</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mouse"></div>
        <span>Scroll</span>
      </motion.a>
    </section>
  )
}

export default Hero
