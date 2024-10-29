
import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'

function App() {
  const [inputVal , setInputVal] = useState('')
  const [todos , setTodos]= useState([])

  function writeTodo(e) {
   // console.log(e.target.value); // Log the input value directly
    setInputVal(e.target.value); // Update the state with the new value
  }
  
  function addTodo(){
    if(inputVal !=''){
      setTodos((prevTodos)=>[...prevTodos , inputVal])
      setInputVal('')
    }
  }

  //console.log(todos);
  

  return (
    <main>
     <h1>To Do List</h1>
     <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
     <TodoContainer todos={todos} />
    </main>
  )
}

export default App
