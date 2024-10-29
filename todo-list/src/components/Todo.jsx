//import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <div className="todo">
        <p>{todo}</p>
        <div className="action">
          <input type="checkbox" name="" id="" />
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
