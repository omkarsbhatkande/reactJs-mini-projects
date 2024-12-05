//import React from 'react'

import { useState } from "react";

const TodoForm = ({onAddTodo}) => {

  const [text ,setText]= useState("");

  const handleInputChange=(e)=>{
    setText(e)
    //console.log(e);
  };


  const handleFormSubmit = (event)=>{
    event.preventDefault();
    onAddTodo(text)
    setText("");
  }

  return (
    <div>
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

export default TodoForm
