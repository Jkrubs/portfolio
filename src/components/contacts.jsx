import React, { useState } from 'react'
import './contacts.css'

export const Contacts = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e879c07b-b0d7-41ff-ab6c-d1e9bfe22d17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}

    const [formData, setFormData]=useState({username:"",phone:"",message:""})

    function handlechange(event){
        setFormData(()=>{
            return {
                
                [event.target.name]:event.target.value
            }
        })
    }
    
  return (
    <div className='message'>
        <div className="declare">
            <div className="head">
            <h3>Don't be Shy! Hit me up😊 </h3>

            </div>
            <h5>Feel free to reach me through the following contact links</h5>
            <div className='coordinate'>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:antonykaranja837@gmail.com">antonykaranja837@gmail.com</a>
            </div>
            <div className='coordinate'>
            <i class="fa-solid fa-phone"></i>
            <p>+254756516329</p>
            </div>
            <div className='coordinate'>
            <i class="fa-brands fa-whatsapp"></i>
            <p>+254799715962</p>
            </div>
            <div className="am-social">
              <h2><b>I am Social  😊</b></h2>
              <div className="social-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
        </div>
        <div className="form">
          <h2>Request A Quote</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input onChange={handlechange} type="text" value={formData.username} name='username' id='name' placeholder='Your name' required/>
                <label htmlFor="number">Phone Number</label>
                <input onChange={handlechange} type="number" value={formData.email} name='phone' id='number' placeholder='Your phone number'required />
                <label htmlFor="message">Your Message</label>
                <textarea onChange={handlechange} name="message" value={formData.message} id="message"rows="6" placeholder='Enter you message' required/>
                <button>Submit now</button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}


