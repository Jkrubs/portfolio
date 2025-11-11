import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    const[active, setActive]=useState('home')
  return (
    <div className="header">
        <div className="logo">
         <Link to={'/'}>Antony<span>.</span></Link>   
        </div>
        <div className="desktop-menu">
            <div className="menu-links">
                <ul>
                    <Link to={'/'} onClick={()=>setActive("home")} className={active==='home'?'active':''}>Home</Link>
                    <Link to={'/work'} onClick={()=>setActive("work")} className={active==='work'?"active":''}>Work</Link>
                    <Link to={'resume'} onClick={()=>setActive("resume")} className={active==="resume"?"active":''}>Resume</Link>
                </ul>
            </div>
            <button>Contact Me</button>
        </div>
    </div>
  )
}
