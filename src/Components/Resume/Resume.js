import React, { useState } from 'react'
import { About } from '../Pages/About'
import { Skills } from '../Pages/Skills'
import './Resume.css'

export const Resume = () => {
    const[active, setActive]=useState('about')
  return (
    <div className="resume">    
        <div className="side-bar">
            <div onClick={()=>setActive('about')} className={active==='about'?'active-button':'side-bar-button'} id="side-bar-button">About</div>
            <div onClick={()=>setActive('skills')} className={active==='skills'?'active-button':'side-bar-button'} id="side-bar-button">Skills</div>
        </div>
        <div className="content">
            {
                active==='about'&& <About/>
            }
            {
                active==='skills'&&<Skills/>
            }
        </div>
    </div>
  )
}
