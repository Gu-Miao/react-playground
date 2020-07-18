import React from 'react'
import { Link } from 'react-router-dom'
import './layout.less'

export default function index(props) {
  return (
    <div className="layout">
      <div>
        <Link to="/">Home</Link>
        <Link to="/hoc-form">HOC Form</Link>
        <Link to="/dialog">Dialog</Link>
      </div>
      {props.children}
    </div>
  )
}
