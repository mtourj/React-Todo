import React from "react";

import "./Todo.css";

const Todo = props => {
  const todo = props.todo.completed ? (
    <div className="todo">
      <button onClick={() => props.delete(props.todo)} className="todo-delete-btn">x</button>
      <h3 className="todo-title-complete">{props.todo.title}</h3>
      <div className="completed-text">Done</div>
    </div>
  ) : (
    <div className="todo">
      <button onClick={() => props.delete(props.todo)} className="todo-delete-btn">x</button>
      <h3 className="todo-title-incomplete">{props.todo.title}</h3>
      <button onClick={() => props.mark(props.todo)} className="mark-complete-btn">MARK COMPLETE</button>
    </div>
  );

  return todo;
};

export default Todo;
