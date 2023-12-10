import React, { useRef } from 'react';
import './index.css';

function AddTodoForm({ onAddTask }) {

  const taskInput = useRef();
  const dateInput = useRef();
  const reminderInput = useRef();

  const onSave = () => {
    let task = taskInput.current.value;
    let date = dateInput.current.value;
    let reminder = reminderInput.current.checked;

    let newTask = {};

    //  check validity
    if(task === '' || date === '') {
      alert("Please fill both fields");
    } else {
      newTask.task = task;
      newTask.date = date;
      newTask.setReminder = reminder;
      
      // clear inputs
      taskInput.current.value = '';
      dateInput.current.value= '';
      reminderInput.current.checked = false;

      onAddTask(newTask);
    }
  }

  return (
      <div className="todo-form">
        <label>Task:</label>
        <input type="text" ref={ taskInput }/>
        <label>Date:</label>
        <input type="text" ref={ dateInput } />
        <label> 
          Set reminder: 
          <input type="checkbox" ref={ reminderInput } />
        </label>
        <button onClick={ onSave }>Save</button>
      </div>
  )
}

export default AddTodoForm
