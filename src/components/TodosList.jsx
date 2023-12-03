import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todos }) {
  return (
    <>
      {todos.map((item, index) => {
        return (
          <TodoItem key={index} todo={item} />
        )
      })}
    </>
  )
}

export default TodosList