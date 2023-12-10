import React from 'react'
import './index.css'

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className={ `todo-item ${(todo.setReminder ? 'reminder' : '')} ` } onDoubleClick={ () => onToggle(todo.id) }>
      <div>
        <div className="task">{ todo.task }</div>
        <div className="date">{ todo.date }</div>
      </div>
      <button onClick={ () => onDelete(todo.id) } className='btn-red'>Delete</button>
    </div>
  )
}

export default TodoItem
