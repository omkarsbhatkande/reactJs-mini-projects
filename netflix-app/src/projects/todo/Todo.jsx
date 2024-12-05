//import React from 'react'
import { useState } from 'react'
import './todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {

  const [task , setTask] = useState([]);
  
    //todo handle FormSubmit function
  const handleFormSubmit=(text)=>{ 
    if(!text) return;
    if(task.includes(text)) return;
  setTask((prevTask)=>[...prevTask , text]);
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

  return (
    <div className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
       <TodoForm onAddTodo={handleFormSubmit}  />
      <section className='myUnOrdList'>
        <ul>
          {task.map((e,index)=>{
            return <TodoList key={index} data={e} onHandleDeleteTodo={handleDeleteTodo} />
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
