import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
  let input = React.createRef();

  return (
    <div className="todo-form">
      <div className='field'>
        <p>CREATE TODO:</p>
        <input ref={input} />
        <button onClick={() => props.addTodo(input)} className='mark-complete-btn'>ADD</button>
      </div>
    </div>
  );
}

export default TodoForm;