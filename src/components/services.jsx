import React from 'react'
import './services.css'
import design from '../images/design.svg'
import injiniya from '../images/injiniya.svg'
import {animate, motion} from 'framer-motion'

export const Services = () => {

  const variants={
    initial:{
      
      y:100,
      opacity:0
    },
    animate:{
      
      y:0,
      opacity:1,
      transition:{
        duraton:2
      }
    }
  }
  return (
    <div className='services'>
      <div className="textContainer">
        <p>I focus on creating responsive and <br />user friendly websites</p>
        <hr />
      </div>
      <div className="titlecontainer">
        <h1><b>Unique</b> Ideas <b>For</b> Your <b>Website</b></h1>
      </div>
      <div className="listcontainer">
        <div className="boxes">
          <motion.div className="box" variants={variants} initial="initial" whileInView="animate" >
          <img src={design} alt="" />
          <h3>UI DESIGN</h3>
          <p>I design user interfaces for apps and websites as a hobby. I am also a user experience enthusiast fascinated by how user experience determines a website's conversion rate.</p>
        </motion.div>
        <motion.div className="box " variants={variants} initial="initial" whileInView="animate">
          <img src={injiniya} alt="" />
          <h3>FULL STACK WEB DEVELOPMENT</h3>
          <p>I build full stack web applications in technologies such react, laravel and django. I have a portfolio of my completed projects in this technologies showcased below.</p>
        </motion.div>
        <motion.div className="box" variants={variants} initial="initial" whileInView="animate" >
        <i class="fa-brands fa-wordpress"></i>
          <h3>WORDPRESS</h3>
          <p>I am a wordpress developer with a background in theme development,plugin development and wordpress API integration into web applications</p>
        </motion.div>
        </div>
        
      </div>
        
    </div>
  )
}
