import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiCode, FiSmartphone, FiPlay, FiX } from 'react-icons/fi'
import { profileData } from '../data/profile'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRefs = useRef({})
  const [imageErrors, setImageErrors] = useState({})

  const projects = profileData.projects

  // Handle image load errors
  const handleImageError = (index, imageUrl) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
    console.warn(`Failed to load image for project ${index}:`, imageUrl)
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
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A collection of projects I've built and contributed to
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                {project.video ? (
                  <div className="project-video-container">
                    {isGoogleDrive(project.video) ? (
                      <>
                        <iframe
                          src={playingVideo === index ? getVideoUrl(project.video) : undefined}
                          className="project-video-iframe"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={{ display: playingVideo === index ? 'block' : 'none' }}
                        />
                        {playingVideo !== index && (
                          <>
                            {project.image && (project.image.startsWith('/') || project.image.startsWith('./') || project.image.startsWith('http') || project.image.includes('.')) ? (
                              !imageErrors[index] ? (
                                <img 
                                  src={isGoogleDriveImage(project.image) ? getImageUrl(project.image) : project.image} 
                                  alt={project.title}
                                  className="project-video-poster"
                                  onError={() => handleImageError(index, project.image)}
                                />
                              ) : (
                                <div className="project-video-placeholder">
                                  <span className="project-emoji">{project.image || '🎥'}</span>
                                </div>
                              )
                            ) : (
                              <div className="project-video-placeholder">
                                <span className="project-emoji">{project.image || '🎥'}</span>
                              </div>
                            )}
                            <div className="video-play-overlay" onClick={() => setPlayingVideo(index)}>
                              <motion.div
                                className="play-button"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FiPlay size={48} />
                              </motion.div>
                            </div>
                          </>
                        )}
                        {playingVideo === index && (
                          <button
                            className="video-close-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setPlayingVideo(null)
                            }}
                            title="Close Video"
                          >
                            <FiX size={20} />
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <video
                          ref={(el) => videoRefs.current[index] = el}
                          src={project.video}
                          className="project-video"
                          controls={playingVideo === index}
                          poster={project.image && (project.image.startsWith('/') || project.image.startsWith('./') || project.image.startsWith('http') || project.image.includes('.')) ? (isGoogleDriveImage(project.image) ? getImageUrl(project.image) : project.image) : undefined}
                          onPlay={() => setPlayingVideo(index)}
                          onPause={() => {
                            if (videoRefs.current[index]?.paused) {
                              setPlayingVideo(null)
                            }
                          }}
                          onEnded={() => setPlayingVideo(null)}
                        >
                          Your browser does not support the video tag.
                        </video>
                        {playingVideo !== index && (
                          <div className="video-play-overlay" onClick={() => {
                            setPlayingVideo(index)
                            setTimeout(() => {
                              videoRefs.current[index]?.play()
                            }, 100)
                          }}>
                            <motion.div
                              className="play-button"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiPlay size={48} />
                            </motion.div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <div className={`project-image-placeholder ${project.image && (project.image.startsWith('/') || project.image.startsWith('./') || project.image.startsWith('http') || project.image.includes('.')) ? 'has-image' : ''}`}>
                    {project.image && (project.image.startsWith('/') || project.image.startsWith('./') || project.image.startsWith('http') || project.image.includes('.')) ? (
                      !imageErrors[index] ? (
                        <img 
                          src={isGoogleDriveImage(project.image) ? getImageUrl(project.image) : project.image} 
                          alt={project.title}
                          className="project-img"
                          onError={() => handleImageError(index, project.image)}
                        />
                      ) : (
                        <span className="project-emoji">{project.image || '📁'}</span>
                      )
                    ) : (
                      <span className="project-emoji">{project.image || '📁'}</span>
                    )}
                  </div>
                )}
                <div className="project-overlay">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="GitHub"
                    >
                      <FiGithub size={24} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Live Demo"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                  {project.mobile && (
                    <motion.a
                      href={project.mobile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Mobile App"
                    >
                      <FiSmartphone size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <FiCode className="project-icon" />
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
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

export default Projects
