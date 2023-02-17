import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

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
          id: 1,
          desc: 'Finish React',
          date: 'Friday at 12:00',
          reminder: true,
        },
      ],
      addTodo: true,
    };
    
  }


  render() {    
    return (
      <div>
        <Header showAddTodo={this.state.addTodo} />
        <AddTodo />
        <TodoList todosList={this.state.todos} />
      </div>
    );
  }
}

export default App;
