import React from 'react'
import './hero.css'
import { Link } from 'react-scroll'
import{animate, motion} from 'framer-motion'

export default function Hero() {
    const textVariants={
        initial:{
            opacity:0,
            x:-100,
        },
        animate:{
            opacity:1, 
            x:0,
            transition:{
                duration:1,
                staggerChildren:1
            }
        },
        scrollbtn:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity,
            }

        }
    }

    const iconVariant={
        initial:{
            rotate:0
        },
        animate:{
            rotate:360
        },
        transition:{
            duration:2000
        }
    }
 

   

  return (
    <motion.div className='hero'>
        <motion.div className='intro' variants={textVariants} initial="initial" whileInView="animate">
        <motion.h4 >ANTONY KARANJA</motion.h4>
        <motion.h1 variants={textVariants} initial="initial" animate="animate">An Avid  Front-End React Developer with a love and passion for digital art and design </motion.h1>
        <motion.div className="buttons"variants={textVariants} initial="initial" animate="animate">
            <motion.button className='port'><Link to="services" smooth={true} offset={-90}>See Portfolio</Link></motion.button>
            <motion.button className='active-btn'><a href="https://www.upwork.com/freelancers/~01ca0327184fbd92d2">Let's Connect<motion.i variants={iconVariant} initial="initial"  whileHover="animate" class="fa-solid fa-handshake"></motion.i></a></motion.button>
        </motion.div>
        <motion.div className="scroll-btn" variants={textVariants} animate="scrollbtn">

        </motion.div>
 
        </motion.div>

      
        
    </motion.div>
  )
}
