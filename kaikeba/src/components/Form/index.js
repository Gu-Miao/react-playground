import React from 'react'
import create from './create'

const Form = props => {
  return (
    <div style={{ border: '1px solid red', padding: 10 }}>
      <form {...props}>{props.children}</form>
    </div>
  )
}

const Item = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      <div>{children}</div>
    </div>
  )
}

Form.create = create
Form.Item = Item

export default Form
