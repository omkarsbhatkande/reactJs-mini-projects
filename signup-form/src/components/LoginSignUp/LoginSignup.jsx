//import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const person = ("../assets/person.png");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={person} alt="person image" />
          <input type="text" />
        </div>
        <div className="input">
          <img src="../assets/email.png" alt="email image" />
          <input type="email" />
        </div>
        <div className="input">
          <img src="../assets/password.png" alt="password image" />
          <input type="password" />
        </div>

        <div className="forgot-pass">
          Lost password <span>Click here</span>
        </div>

        <div className="submit-container">
          <div className="submit">
            sign Up
          </div>
          <div className="submit">
            Login
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
