import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }  

  idTracker = 0;

  mark = target => {
    let todos = Array.from(this.state.todos);
    console.log(target);
    const index = todos.indexOf(target);
    todos[index].completed = true;
    this.setState({todos: todos});
  }

  deleteTodo = target => {
    let todos = Array.from(this.state.todos);
    console.log(target);
    const index = todos.indexOf(target);
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  addTodo = input => {
    if(input.current.value === "")
      return;
    console.log(input);
    let todos = Array.from(this.state.todos);
    todos.push({ title: input.current.value, completed: false, id: this.idTracker});
    this.idTracker++;
    this.setState({todos: todos});
  }

  removeCompleted = () => {
    let todos = Array.from(this.state.todos);
    todos = todos.filter(element => element.completed === false);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="todo-container">
        <h1>TODO LIST</h1>
        { this.state.todos.length === 0 ? (
          <h2>You have no todos! Add one below</h2>
        ) : (
        <TodoList delete={this.deleteTodo} mark={this.mark} todos={this.state.todos} />
        )
      }
        <TodoForm removeCompleted={this.removeCompleted} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
