//import React from "react";

const InputContainer = ({ inputVal , writeTodo , addTodo }) => {
  return (
    <div>
      <div className="input-container">
        <input type="text" placeholder="Enter The Task" value={inputVal} onChange={writeTodo} />
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
};

export default InputContainer;
