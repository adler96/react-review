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
  }

  toggleShowForm() {
    this.setState({
      addTodo: !this.state.addTodo
    })
  }

  addNew(obj) {
    console.log('submitted');
    obj.id = this.state.number + 1;

    this.setState({
      todos: this.state.todos.push(obj),
      number: this.state.number + 1,
    });
    console.log(this.state.todos);
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
        <TodoList todosList={this.state.todos} />
      </div>
    );
  }
}

export default App;
