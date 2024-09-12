//import React from 'react'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Your Feet Deserve The Best And Were And To Help You With Our Shoes. Your Feet Deserve The Best.</p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Shop With Us</p>
          <div className="brand-icons">
            <img src="../public/images/amazon.png" alt="" />
            <img src="../public/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="../public/images/hero-image.png" alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero
