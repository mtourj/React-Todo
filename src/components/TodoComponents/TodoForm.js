import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
  let input = React.createRef();

  return (
    <div className="todo-form">
      <div className='field'>
        <p>CREATE TODO:</p>
        <input ref={input} />
        <button onClick={() => props.addTodo(input.current.value)} className='add-btn'>ADD</button>
      </div>
      <button onClick={props.removeCompleted} className="clear-complete-btn">CLEAR COMPLETED</button>
    </div>
  );
}

export default TodoForm;