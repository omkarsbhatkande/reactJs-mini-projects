//import React from 'react'
import Todo from "./Todo";

const TodoContainer = ({todos,deleteTodo}) => {
  return (
    <div>
      <div className="task-container">
        {todos.map((todo,index)=>{
          return (
            <Todo todo={todo} index={index} deleteTodo={deleteTodo} />
          )
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
