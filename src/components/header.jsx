import React, { useEffect, useState } from 'react'

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
        <h2>Antony.Dev</h2>
        </div>
        <div className="menu">
            <ul>
                <Link to='hero' smooth={true}><li>Home</li></Link>
                <Link to='about' offset={-100} smooth={true}><li>About</li></Link>
                <Link to='services' offset={-100} smooth={true}><li>Portfolio</li></Link>
                <Link to='contacts' smooth={true} offset={300}><li className='active'>Contacts</li></Link>
            </ul>
        </div> 
    </div>
  )
}
