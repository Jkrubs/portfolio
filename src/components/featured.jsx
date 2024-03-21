import React from 'react'
import './services.css'
import edusity from '../images/edusity.png'
import facebook from '../images/facebook.png'
import shopper from '../images/shopper.png'
import kai from '../images/kai.png'
export const Featured = () => {
  return (
    <div className='services'>
       <h3>Featured Projects</h3>
        <div className="projects">
          <div className="project">
            <div className="image-container">
              <img src={edusity} alt="" />
            </div>
            <h3>Edusity</h3>
            <a href="http://JKrubs.github.io/edusity">live demo</a>
          </div>
          <div className="project">
            <div className="image-container">
              <img src={facebook} alt="" />
            </div>
            <h3>Facebook Clone</h3>
            <a href="http://JKrubs.github.io/facebook-clone">live demo</a>
          </div>
          <div className="project">
            <div className="image-container">
              <img src={shopper} alt="" />
            </div>
            <h3>Shopper E-commerce</h3>
            <a href="http://JKrubs.github.io/shopper">live demo</a>
          </div>
          <div className="project">
            <div className="image-container">
              <img src={kai} alt="" />
            </div>
            <h3>Kai & Karo Car Mart </h3>
            <a href="http://JKrubs.github.io/kai-karo">live demo</a>
          </div>
        </div>
    </div>
  )
}
