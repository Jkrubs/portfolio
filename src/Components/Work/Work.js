import React, { useState } from 'react'
import { Projects } from '../assets/assets'
import './Work.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'
import right from '../assets/right.svg'
import left from '../assets/left.svg'

export const Work = () => {
  const projects = Projects
  const [currentIndex, setCurrentIndex] = useState(0)
  const project = projects[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    })
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    })
  };

  return (
    <motion.section className="work">
      {
        <div className="project-details-container">
          <div className="project-details">
            <div className="project-number">{project.id}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            {project.stack.map((item, index) => {
              return (

                <ul className="language" key={index} >
                  <li>{item.name}</li>
                </ul>
              )
            })}
            <div className="live-button"><Link to={project.link}>Live Preview</Link></div>
          </div>

          <div className="project-image">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.1 }}
                className="image-wrapper"
              >
                <img src={project.image} alt="" />
              </motion.div>
            </AnimatePresence>
            <div className="navigation-buttons">
              <div onClick={handlePrevious} className="navigation-button"><img src={left} alt="" /></div>
              <div onClick={handleNext} className="navigation-button"><img src={right} alt="" /></div>
            </div>
          </div>
        </div>
      }
    </motion.section>
  )
}
