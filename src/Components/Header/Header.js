import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import close from '../assets/close.png'
import menu from '../assets/text.png'
export const Header = () => {
    const [active, setActive] = useState()
    const [mobilemenu, setMobilemenu]=useState(false)
    mobilemenu? document.body.style.overflow="hidden":document.body.style.overflow="auto"
    return (
        
        <div className="header">
            <div className="logo">
                <Link to={'/'}>Antony<span>.</span></Link>
            </div>
            <div className={mobilemenu?'mobile-menu':'desktop-menu'}>
                <img onClick={()=>setMobilemenu(false)} src={close} alt="" />
                <div className="menu-links">
                    <ul>
                        <Link to={'/'} onClick={() => setActive("home")} className={active === 'home' ? 'active' : ''}>Home</Link>
                        <Link to={'/work'} onClick={() => setActive("work")} className={active === 'work' ? "active" : ''}>Work</Link>
                        <Link to={'resume'} onClick={() => setActive("resume")} className={active === "resume" ? "active" : ''}>Resume</Link>
                    </ul>
                </div>
                <button>Contact Me</button>
            </div>
            <img onClick={()=>setMobilemenu(true)} src={menu} alt="" />
        </div>
    )
}
