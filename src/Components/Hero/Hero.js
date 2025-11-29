import React from 'react'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github-svgrepo-com.svg'
import twitter from '../assets/twitter-svgrepo-com.svg'
import CountUp from 'react-countup'
import './Hero.css'
import Photo from './Photo';

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-text">
          <div className="job-title">Software Developer</div>
          <h1>Hello, I'm <br /><span>Antony Karanja</span></h1>
          <p>I excel at crafting elegant digital solutions that solves problems and makes life easier. I am proficient in various programming languages and technologies.</p>
          <div className="hero-buttons">
            <button>Hire Me</button>
            <div className="socials">
              <img src={linkedin} alt="" />
              <img src={github} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <Photo />
        </div>

      </div>
      <div className="hero-numbers">
        <div className="hero-number">
          <div className="number"><CountUp
            end={10}
            duration={3}
            separator=","
          /></div>
          <div className="number-text">Projects <br /> Completed</div>
        </div>
        <div className="hero-number">
          <div className="number"><CountUp
            end={4}
            duration={3}
            separator=","
          /></div>
          <div className="number-text">Years Of <br /> Experience</div>
        </div>
        <div className="hero-number">
          <div className="number"><CountUp
            end={5}
            duration={3}
            separator=","
          /></div>
          <div className="number-text">Technologies <br /> Mastered</div>
        </div>
        <div className="hero-number">
          <div className="number"><CountUp
            end={100}
            duration={3}
            separator=","

          /></div>
          <div className="number-text">Code <br />Commits</div>
        </div>
      </div>
    </div>
  )
}
