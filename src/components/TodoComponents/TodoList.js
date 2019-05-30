import React from 'react';
import Todo from './Todo';

import './TodoList.css';

const TodoList = props => {
  return (
    <div className="todo-list">
      {
        props.todos.map(todo => <Todo delete={props.delete} toggleComplete={props.toggleComplete} todo={todo} key={todo.id}/>)
      }
    </div>
  );
}

export default TodoList;