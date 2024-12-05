//import React from 'react'

import { FaCheckCircle } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

const TodoList = ({key,data,onHandleDeleteTodo}) => {
  return (
    <div>
      <li key={key} className='todo-item'>
              <span>{data}</span>
              <button className='check-btn'><FaCheckCircle /></button>
              <button className='delete-btn' onClick={()=>onHandleDeleteTodo(data)}><MdDelete /></button>
            </li>
    </div>
  )
}

export default TodoList
