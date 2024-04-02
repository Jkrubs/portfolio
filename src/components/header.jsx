import React, { useEffect, useState } from 'react'
import logo from '../images/antony.png'

import './header.css'
import { Link } from 'react-scroll'


export const Header = () => {
  
 const[isSticky , setIsSticky]=useState(false)
 useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if (window.scrollY>20){
      setIsSticky(true)
    }else{
      setIsSticky(false)
    }
  })
 })

  return (
    <div className={isSticky?"scrolled":"header"}>
       <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul>
                <Link to='hero' smooth={true}><li>Home</li></Link>
                <Link to='about' offset={-100} smooth={true}><li>About</li></Link>
                <Link to='portfolio' offset={-70} smooth={true}><li>Portfolio</li></Link>
                <Link to='message' smooth={true} offset={-400}><li className='active'>Contacts</li></Link>
            </ul>
        </div> 
    </div>
  )
}
