import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [
        {
          id: 1,
          desc: 'Go to gym',
          date: 'Wednesday at 12:00',
          reminder: true,
        },
        {
          id: 2,
          desc: 'Get a haircut',
          date: 'Wednesday at 15:00',
          reminder: false,
        },
        {
          id: 3,
          desc: 'Finish React',
          date: 'Friday at 12:00',
          reminder: true,
        },
      ],
      addTodo: true,
      number: 3
    };

    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleReminder = this.toggleReminder.bind(this);
  }

  toggleShowForm() {
    this.setState({
      addTodo: !this.state.addTodo
    })
  }

  // add new todo
  addNew(obj) {
    console.log('submitted');
    obj.id = this.state.number + 1;

    this.setState({
      todos: [...this.state.todos, obj],
      number: this.state.number + 1,
    });
    console.log(this.state.todos);
  }

  // delete existing todo
  deleteTodo(delId) {
    let newTodos = this.state.todos.filter((elt) => {
      return (elt.id !== delId);
    });

    this.setState({
      todos: newTodos
    });
    console.log(newTodos);
  }

  // toggle reminder for a todo
  toggleReminder(toggleId) {
    console.log('toggled: '+toggleId);
    let newTodos = this.state.todos.map((element) => {
      if(element.id === toggleId) {
        element.reminder = !element.reminder;
        return element;
      } else {
        return element;
      }
    });    

    this.setState({
      todos: newTodos
    });
  }

  render() {
    let form = null;
    if(this.state.addTodo === true) {
      form = <AddTodo onSubmit={this.addNew}/>
    }
    
    return (
      <div className='app'>
        <Header showAddTodo={this.state.addTodo} onClick={this.toggleShowForm} />
        {form}
        <TodoList todosList={this.state.todos} onDelete={this.deleteTodo} onToggle={this.toggleReminder} />
      </div>
    );
  }
}

export default App;
