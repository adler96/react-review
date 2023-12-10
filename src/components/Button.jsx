import React from 'react'
import './index.css'

function Button({ show, onToggle }) {
  return (
      <button onClick={onToggle} className={show ? 'btn-red' : 'btn-green' } >{ show ? 'Close' : 'Add' }</button>
  )
}

export default Button