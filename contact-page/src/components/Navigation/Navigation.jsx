//import React from 'react'

import './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navigation
