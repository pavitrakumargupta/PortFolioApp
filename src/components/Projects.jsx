import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiGithub, FiExternalLink, FiCode, FiSmartphone, FiPlay, FiX } from 'react-icons/fi'
import { profileData, projectTabs } from '../data/profile'
import './Projects.css'

const Projects = () => {
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
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalVideoPlaying, setIsModalVideoPlaying] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const [activeTab, setActiveTab] = useState(projectTabs[0] || 'All')
  
  // On mobile, show immediately; on desktop, use scroll animation
  const shouldAnimate = !isMobile && isInView

  const projects = profileData.projects
  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((project) => project.categories?.includes(activeTab))

  // Handle image load errors
  const handleImageError = (projectKey, imageUrl) => {
    setImageErrors(prev => ({ ...prev, [projectKey]: true }))
    console.warn(`Failed to load image for project ${projectKey}:`, imageUrl)
  }

  // Helper function to convert Google Drive link to embed URL
  const getVideoUrl = (videoUrl) => {
    if (!videoUrl) return null
    
    // Check if it's a Google Drive link
    if (videoUrl.includes('drive.google.com')) {
      // Extract file ID from Google Drive URL
      const match = videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
      if (match && match[1]) {
        // Convert to embed format
        return `https://drive.google.com/file/d/${match[1]}/preview`
      }
    }
    
    return videoUrl
  }

  // Helper function to convert Google Drive image link to direct image URL
  // Tries multiple formats as fallbacks
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return null
    
    // If it's already a googleusercontent link, ensure it's HTTPS
    if (imageUrl.includes('googleusercontent.com')) {
      // Convert http to https
      let url = imageUrl.replace('http://', 'https://')
      // The format should be: https://lh3.googleusercontent.com/d/FILE_ID=s4000
      // The URL format from user: http://lh3.googleusercontent.com/d/1U2TjKuNE9xYTWrNnac1N7fRtn2BEWVO_=s4000
      // This looks correct, just need to ensure HTTPS
      return url
    }
    
    // Check if it's a Google Drive link
    if (imageUrl.includes('drive.google.com')) {
      // Extract file ID from Google Drive URL (handles both /view and /view?usp=drive_link formats)
      const match = imageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
      if (match && match[1]) {
        const fileId = match[1]
        // Try thumbnail API format (most reliable)
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=s4000`
      }
    }
    
    return imageUrl
  }

  // Check if video is Google Drive
  const isGoogleDrive = (videoUrl) => {
    return videoUrl && videoUrl.includes('drive.google.com')
  }

  // Check if image is Google Drive or Google usercontent
  const isGoogleDriveImage = (imageUrl) => {
    return imageUrl && (imageUrl.includes('drive.google.com') || imageUrl.includes('googleusercontent.com'))
  }

  const hasImageAsset = (imageUrl) => {
    return !!(imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('./') || imageUrl.startsWith('http') || imageUrl.includes('.')))
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalVideoPlaying(false)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setIsModalVideoPlaying(false)
  }

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeProjectModal()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEsc)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEsc)
    }
  }, [selectedProject])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial={isMobile ? "visible" : "hidden"}
        animate={shouldAnimate || isMobile ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A collection of projects I've built and contributed to
          </p>
        </motion.div>

        <motion.div className="project-tabs" variants={itemVariants}>
          {projectTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`project-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => {
            const projectKey = project.title || index
            return (
            <motion.div
              key={projectKey}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <div className={`project-image-placeholder ${hasImageAsset(project.image) ? 'has-image' : ''}`}>
                  {hasImageAsset(project.image) && !imageErrors[projectKey] ? (
                    <img
                      src={isGoogleDriveImage(project.image) ? getImageUrl(project.image) : project.image}
                      alt={project.title}
                      className="project-img"
                      onError={() => handleImageError(projectKey, project.image)}
                    />
                  ) : (
                    <span className="project-emoji">{project.image || '📁'}</span>
                  )}
                  {project.video && (
                    <div className="preview-video-badge">
                      <FiPlay size={14} />
                      Video
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <FiCode className="project-icon" />
                  <h3 className="project-title">{project.title}</h3>
                </div>
                {project.status && (
                  <div className="project-status">{project.status}</div>
                )}
                {project.badges?.length > 0 && (
                  <div className="project-badges">
                    {project.badges.slice(0, 3).map((badge, i) => (
                      <span key={i} className="project-badge">{badge}</span>
                    ))}
                  </div>
                )}
                <p className="project-description project-description-preview">{project.description}</p>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </motion.div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeProjectModal}>
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeProjectModal}
              title="Close"
            >
              <FiX size={20} />
            </button>

            <div className="project-modal-media">
              {selectedProject.video && isModalVideoPlaying ? (
                isGoogleDrive(selectedProject.video) ? (
                  <iframe
                    src={getVideoUrl(selectedProject.video)}
                    className="project-modal-video-iframe"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedProject.video}
                    className="project-modal-video"
                    controls
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className={`project-modal-image-wrap ${hasImageAsset(selectedProject.image) ? 'has-image' : ''}`}>
                  {hasImageAsset(selectedProject.image) && !imageErrors[selectedProject.title] ? (
                    <img
                      src={isGoogleDriveImage(selectedProject.image) ? getImageUrl(selectedProject.image) : selectedProject.image}
                      alt={selectedProject.title}
                      className="project-modal-image"
                      onError={() => handleImageError(selectedProject.title, selectedProject.image)}
                    />
                  ) : (
                    <span className="project-emoji">{selectedProject.image || '📁'}</span>
                  )}

                  {selectedProject.video && (
                    <button
                      type="button"
                      className="project-modal-play-button"
                      onClick={() => setIsModalVideoPlaying(true)}
                    >
                      <FiPlay size={20} />
                      Play Project Video
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="project-modal-content">
              <h3 className="project-modal-title">{selectedProject.title}</h3>

              {selectedProject.status && (
                <div className="project-status">{selectedProject.status}</div>
              )}

              {selectedProject.badges?.length > 0 && (
                <div className="project-badges">
                  {selectedProject.badges.map((badge, i) => (
                    <span key={i} className="project-badge">{badge}</span>
                  ))}
                </div>
              )}

              <p className="project-description">{selectedProject.description}</p>

              {selectedProject.categories?.length > 0 && (
                <div className="project-categories">
                  {selectedProject.categories.map((category, i) => (
                    <span key={i} className="category-tag">{category}</span>
                  ))}
                </div>
              )}

              {selectedProject.technologies?.length > 0 && (
                <div className="project-tech">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                    <FiGithub size={18} />
                    GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                    <FiExternalLink size={18} />
                    Live Link
                  </a>
                )}
                {selectedProject.mobile && (
                  <a href={selectedProject.mobile} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                    <FiSmartphone size={18} />
                    App Link
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Projects




