//import React from 'react'

import { useEffect,useState } from "react";

const TodoDate = () => {

  const [date , setDate]= useState("");

  //todo Date and Time
useEffect(()=>{
  const interval = setInterval(()=>{
    const now = new Date();
    const now1 = now.toLocaleString();
    setDate(`${now1}`)
  },1000) 
  return ()=> clearInterval(interval) 
},[])

  return (
    <div>
      <h2 className='date-time'>{date}</h2>
    </div>
  )
}

export default TodoDate
