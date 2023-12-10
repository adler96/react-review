import React, { useState, useRef } from 'react';
import Header from './components/Header.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import TodosList from './components/TodosList.jsx';
import './components/index.css';

const App = () => {


  // CRUD FUNCTIONS 
  // addtask
  const addTask = (newTask) => {
    // assuming we receive a task object
    currentId.current += 1;
    newTask.id = currentId.current;

    setAllTodos((allTodos) => {
      return [...allTodos, newTask];
    });
  }

  // delete task
  const deleteTask = (taskId) => {
    setAllTodos((allTodos) => 
      allTodos.filter((item) => {
        return item.id !== taskId;
      })
    );
  }


  // toggle reminder
  const toggleReminder = (taskId) => {
    setAllTodos((allTodos) => {
      return allTodos.map((item, index) => {
        if(item.id === taskId) {
          item = {...item, setReminder: !item.setReminder};
        }
        return item;
      })
    });
  }

  // toggle showForm
  const toggleShowForm = () => {
    setShowForm((showForm) => {
      return showForm = !showForm;
    });
  }

  let currentId = useRef(1);

  const [allTodos, setAllTodos] = useState([
    {
      id: 1,
      task: "Cook",
      date: "Tonight",
      setReminder: true
    }
  ]);

  const [showForm, setShowForm] = useState(true);

  return (
    <div className='app'>
      <Header show={showForm} onToggleForm={toggleShowForm}  />
      { showForm ? <AddTodoForm show={showForm} onAddTask={addTask} /> : '' }
      <TodosList todos={allTodos} onToggleReminder={toggleReminder} onDeleteTask={deleteTask} /> 
    </div>
  )
}

export default App;
