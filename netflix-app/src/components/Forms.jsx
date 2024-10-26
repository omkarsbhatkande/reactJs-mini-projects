import  { useState } from 'react'

const Forms = () => {
  const [name , setName] = useState({firstName : '',lastName:''})

  function handleSubmit(e){
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <label>FirstName  :</label>
        <input type="text" onChange={(e)=>{setName({...name , firstName:e.target.value})}}  value={name.firstName} />
        <label>lastName  :</label>
        <input type="text" onChange={(e)=>{setName({...name , lastName:e.target.value})}}  value={name.lastName} />
        <button onClick={(e)=>handleSubmit(e)}>submit</button>
      </form>
      
    </div>
  )
}

export default Forms
