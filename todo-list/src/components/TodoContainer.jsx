//import React from 'react'
import Todo from "./Todo";

const TodoContainer = ({todos}) => {
  return (
    <div>
      <div className="task-container">
        {todos.map((todo)=>{
          return (
            <Todo todo={todo} />
          )
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
