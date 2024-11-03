//import React from 'react'

import { useState } from "react"

const Toggle = () => {
  const [isOn ,setIsOn] =useState(false);


  function handleToggleSwitch(){
    setIsOn(!isOn);
  }

  return (
    <>
     <div onClick={handleToggleSwitch}>
        <div>
          <span>{isOn ? "On" : "OFF"}</span>
        </div>
      </div> 
    </>
  )
}

export default Toggle
