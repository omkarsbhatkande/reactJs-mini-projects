//import React from 'react'
import { useState } from "react";
const DerivativeState = () => {

  const [users , setUsers] = useState([
    {name : "omkar",age:24},
    {name : "Bob",age:25},
    {name : "Charlie",age:23},
    {name : "Angles",age:28},
  ])

  console.log(users);

  const userCount = users.length;
  
  return (
    <div>
      total user : {userCount}
    </div>
  )
}

export default DerivativeState
