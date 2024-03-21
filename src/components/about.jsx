import React from 'react'
import './about.css'
import about_image from '../images/about.webp'
import html from '../images/html-icon.svg'
import css from '../images/css-icon.svg'
import javascript from '../images/js-icon.svg'
import python from '../images/py-icon.svg'
import react from '../images/react-js-icon.svg'
import next_js from '../images/nextjs-icon.svg'

export const About = () => {
  return (
    <div className='about'>
        <div className="image">
            <img src={about_image} alt="" />
        </div>
        <div className="about-me">
            <h4>About Me</h4>
            <p>Hi there, My name is Antony Karanja a Kenyan web developer who is passionate and focused in creating and developing and re-designing clean UI/UX for web applications!</p>
            <div className="stack">
                <h3>Tech Stack</h3>
                <div className="stacks">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={python} alt="" />
                    <img src={javascript} alt="" />
                    <img src={next_js} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
