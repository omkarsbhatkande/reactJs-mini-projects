import  { useState } from 'react'

const UseState = () => {

  const [count , setCount] = useState(0);

  function handleUseStateCount(){
    setCount(count+1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleUseStateCount}>increse</button>
    </div>
  )
}

export default UseState
