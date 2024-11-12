//import React from 'react'
import { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './todo.css'

const Todo = () => {

  const [text ,setText]= useState("");
  const [task , setTask] = useState([]);

 const handleInputChange=(e)=>{
    setText(e)
    //console.log(e);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(!text) return;
    if(task.includes(setText)) return;
    setTask((prev)=>[...prev,text])
    setText("");
  };

  const now = new Date();
  const fomartDate = now.toLocaleString();

  return (
    <div className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <h2 className='date-time'>{fomartDate}</h2>
      </header>
      <section className='form'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input type="text" className='todo-input' autoComplete='off' value={text} onChange={(e)=>handleInputChange(e.target.value)} />
            </div>
            <dir>
              <button type='submit' className='todo-btn'>add Task</button>
            </dir>
          </form>
      </section>
      <section className='myUnOrdList'>
        <ul>
          {task.map((e,index)=>{
            return <li key={index} className='todo-item'>
              <span>{e}</span>
              <button className='check-btn'><FaCheckCircle /></button>
              <button className='delete-btn'><MdDelete /></button>
            </li>
          })}
        </ul>
      </section>
    </div>
  )
}

export default Todo
