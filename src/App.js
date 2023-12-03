import React, { useState } from 'react';
import Header from './components/Header.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import TodosList from './components/TodosList.jsx';

let App = () => {

  const [allTodos, setAllTodos] = useState([
    {
      task: "Cook",
      date: "Tonight",
      setReminder: true
    }
  ]);

  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Header />
      <AddTodoForm />
      <TodosList todos={allTodos} />
    </>
  )
}

export default App;
