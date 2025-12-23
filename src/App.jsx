import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ThreeScene from './components/ThreeScene'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <ThreeScene />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
