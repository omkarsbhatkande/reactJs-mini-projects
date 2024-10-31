import { useState } from "react"



const DericalState = () => {
   const [users , setUsers] = useState([
    {name : "omkar",age:24},
    {name : "Bob",age:25},
    {name : "Charlie",age:23},
    {name : "Angles",age:28},
  ])
  return (
    <div>
      <h1>Users Lists</h1>
      <ul>{users.map((curElem,index)=>{
        return <li key={index}>
          {curElem.name} - {curElem.age} year old.
        </li>
      })}</ul>
    </div>
  )
}

export default DericalState
