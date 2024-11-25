//import React from 'react'
import { useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './todo.css'

const Todo = () => {

  const [text ,setText]= useState("");
  const [task , setTask] = useState([]);
  const [date , setDate]= useState("");

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


  //todo handle delete function
  const handleDeleteTodo=(value)=>{
  //  console.log(task);
  //   console.log(value);
    const updatedTask = task.filter((curTask)=>curTask !== value );
    setTask(updatedTask);
  }

  //todo clear function

  const handleClearTodo = ()=>{
    setTask([]);
  }




  useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date();
      const now1 = now.toLocaleString();
      setDate(`${now1}`)
    },1000) 
    return ()=> clearInterval(interval) 
  },[])




  return (
    <div className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <h2 className='date-time'>{date}</h2>
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
              <button className='delete-btn' onClick={()=>handleDeleteTodo(e)}><MdDelete /></button>
            </li>
          })}
        </ul>
      </section>
      <section>
        <button className='clear-btn' onClick={handleClearTodo}>Clear All</button>
      </section>
    </div>
  )
}

export default Todo
