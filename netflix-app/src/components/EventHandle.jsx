//import React from 'react'

const EventHandle = () => {

  // const handleClickevent=(event)=>{
  //   console.log(event);
    
  //   alert('upon aa gaya bhai')
  // }
  return (
    <div>
      {/* <button onClick={handleClickevent}>Click me </button> */}
      <button onClick={()=>console.log('click')
      }>click</button>
    </div>
  )
}

export default EventHandle
