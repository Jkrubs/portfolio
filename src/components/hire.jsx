import React from 'react'
import './hire.css'
import upwork from '../images/upwork.svg'
import fiverr from '../images/fiverr.svg'

export const Hire = () => {
  return (
    <div className='hire'>
      <div className="hire-text">
        <h1>Do you have an Idea? <br /> Let me help you breath life into it</h1>
        <p>Let's make something awesome together.Hire me on upwork or Fivver by clicking on these buttons</p>
      </div>
        
        <div className="hire-buttons">
            <button>
            <img src={upwork} alt="" />
                Hire me on Upwork
            </button>
            <button>
                <img src={fiverr} alt="" />
                Hire me on Fivver
            </button>
        </div>
    </div>
  )
}
