import React from "react";

import "./Todo.css";

const Todo = props => {
  const completeStyle = props.todo.completed ? "complete" : null;

  //We need to stop propagation and still pass a target
  const deleteTodo = event => {
    event.stopPropagation();
    props.delete(props.todo);
  }

  return (
    <div onClick={() => props.toggleComplete(props.todo)} className={`todo ${completeStyle}`.toString()}>
      <button onClick={deleteTodo} className="todo-delete-btn">x</button>
      <h3 className={`todo-title ${completeStyle}`}>{props.todo.title}</h3>
      <button className={`toggle-complete-btn ${completeStyle}`}></button>
    </div>
  );
};

export default Todo;
