import React from 'react'

function TodoItem({ todo }) {
  return (
    <>
      <div>
        <div className="task">{ todo.task }</div>
        <div className="date">{ todo.date }</div>
      </div>
      <i></i>
    </>
  )
}

export default TodoItem