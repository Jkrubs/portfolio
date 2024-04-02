import React, { useRef } from 'react'
import edusity from '../images/edusity.png'
import facebook from '../images/facebook.png'
import shopper from '../images/shopper.png'
import kai from '../images/kai.png'
import './projects.css'
import{motion, useScroll, useSpring, useTransform}from 'framer-motion'
export const Projects = () => {
    const projects=[
        {
            title:"Edusity University",
            about:"A simple landing page for an educational institution showcasing different parts of the website. It is responsive and very user friendly not mentioning its great visual appeal",
            image:edusity,
            link:"https://JKrubs.github.io/edusity"
        },
        {
            title:"Shopper e-commerce",
            about:"In this Project, i created a fully functioning multi-page e commerce website. The site is responsive,easy to use with a minimalistic design.",
            image:shopper,
            link:"https://JKrubs.github.io/shopper"
        },{
            title:"Facebook Clone",
            about:"This is a facebook homepage clone using html and css only.It is responsive and has a great visual appearance like the app itself.Given the design, i will code your idea into a reality ",
            image:facebook,
            link:"https://JKrubs.github.io/facbook clone"
        },{
            title:"React Car Mart",
            about:"In this project, i cloned the landing page of the leading car mart in Kenya.It is responsive and has a great user experince with added functionalities such as the light and dark modes. It is also responsive and has the graphics paid to keen attention",
            image:kai,
            link:"https://JKrubs.github.io/kai-karo"
        }
    ]

    const Single=({item})=>{
        const ref=useRef()
        const {scrollYProgress}=useScroll({target:ref})
        const y=useTransform(scrollYProgress,[0,1],[-100,100])
        return <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref} >
                      <img src={item.image} alt="" />  
                    </div>
                <motion.div className="text-container" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.about}</p>
                    <button><a href={item.link}>See Demo</a></button>
                </motion.div>
                </div>
                
            </div>
            </section>
    }

    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]})
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

    
  return (
      <div className='portfolio' ref={ref}>
        <div className="progress">
            <h2>Featured Works</h2>
            <motion.div style={{scaleX}} className="progress-bar">

            </motion.div>
        </div>
        <div className="single">
         {
            projects.map(item=>(
                < Single item={item} key={item.title}/>
            ))
        }   
        </div>
        

      </div>
  )
}
