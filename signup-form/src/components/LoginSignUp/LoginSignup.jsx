//import React from 'react'
import { useState } from 'react';
import './LoginSignup.css'


const LoginSignup = () => {

  const [action , setAction]= useState("Sign Up");


  const person = ("../assets/person.png");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login" ? <div></div>: <div className="input">
          <img src={person} alt="person image" />
          <input type="text" placeholder='Name' />
        </div>}
       
        <div className="input">
          <img src="../assets/email.png" alt="email image" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src="../assets/password.png" alt="password image" />
          <input type="password" placeholder='Password' />
        </div>
          {action==="Sign Up" ? <div></div>: <div className="forgot-pass">
          Lost password <span>Click here</span>
        </div> }
       

        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
            sign Up
          </div>
          <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
            Login
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
