//import React from 'react'
import { useState } from 'react'
import './todo.css'

const Todo = () => {

  const [text ,setText]= useState("");

 const handleInputChange=(e)=>{
    setText(e)
    console.log(e);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
  };

  return (
    <div className='todo-container'>
      <header>
        <h1>Todo List</h1>
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
    </div>
  )
}

export default Todo
