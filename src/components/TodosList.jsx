import React from 'react';
import TodoItem from './TodoItem';
import './index.css'

function TodosList({ todos, onToggleReminder, onDeleteTask }) {

  return (
    <div className="todos-list">
      { todos.map((item) => {
        return (
          <TodoItem key={item.id} todo={item} onDelete={onDeleteTask} onToggle={onToggleReminder} />
        )
      }) }
    </div>
  )
}

export default TodosList
