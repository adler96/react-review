import React from 'react'
import Title from './Title'
import Button from './Button'
import './index.css'

function Header({ show, onToggleForm }) {
  return (
    <div className="header">
      <Title content={"Task Tracker"}/>
      <Button show={show} onToggle={onToggleForm} style={ show ? 'backgroundColor: red' : 'backgroundColor:green' } />
    </div>
  )
}

export default Header
