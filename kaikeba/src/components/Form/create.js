import React, { Component, cloneElement } from 'react'

const create = () => {
  return Cmp => {
    return class extends Component {
      state = {
        fields: {},
        errors: {}
      }
      options = {}
      handleChange = e => {
        const { name, value } = e.target
        if (this.options[name].trigger === 'change') {
          const errors = this.validate(name, value)
          this.setState({
            errors,
            fields: { ...this.state.fields, [name]: value }
          })
        } else {
          this.setState({ fields: { ...this.state.fields, [name]: value } })
        }
      }
      getFieldDecorator = (name, option = {}) => {
        return InputComponent => {
          const defaultOption = {
            initialValue: '',
            isRequire: false,
            rules: [],
            trigger: 'submit'
          }
          const fieldOption = { ...defaultOption, ...option }
          this.options[name] = fieldOption
          const { initialValue } = fieldOption
          return (
            <div>
              {cloneElement(InputComponent, {
                name,
                value:
                  this.state.fields[name] !== undefined ? this.state.fields[name] : initialValue,
                onChange: this.handleChange,
                autoComplete: 'off'
              })}
              <br />
              <em style={{ color: 'red' }}>{this.state.errors[name]}</em>
            </div>
          )
        }
      }
      getFieldValue = name => {
        if (name in this.state.fields) {
          return this.state.fields[name]
        } else if (Object.keys(this.options).includes(name)) {
          return this.options[name].initialValue || ''
        } else {
          console.error('field name is not exist!')
        }
      }
      getFieldsValue = names => {
        const result = {}
        if (undefined === names) {
          Object.keys(this.options).forEach(name => {
            result[name] = this.getFieldValue(name)
          })
          return result
        }
        if (typeof names === 'string') {
          return this.getFieldValue(names)
        }
        if (names instanceof Array) {
          names.forEach(name => {
            result[name] = this.getFieldValue(name)
          })
          return result
        }
        console.error('argument must be a string or arrary!')
      }
      validateFiled = (name, fieldValue) => {
        const option = this.options[name]
        const value = fieldValue ? fieldValue : this.state.fields[name]
        let error = ''
        if (option.isRequire && !value) {
          return `${name} is required`
        }
        if (option.rules) {
          option.rules.every(rule => {
            if (!rule.reg.test(value)) {
              error = rule.message
              return false
            }
            return true
          })
        }
        return error
      }
      validate = (filedName, value) => {
        const errors = {}
        if (filedName) {
          const error = this.validateFiled(filedName, value)
          if (error) {
            errors[filedName] = error
          }
        } else {
          for (let name in this.options) {
            const error = this.validateFiled(name)
            if (error) {
              errors[name] = error
            }
          }
        }
        return errors
      }
      validateFields = callback => {
        const errors = this.validate()
        if (Object.keys(errors).length) {
          this.setState({ errors })
          callback(errors, null)
        } else {
          callback(null, this.getFieldsValue())
        }
      }
      render() {
        const form = {
          getFieldDecorator: this.getFieldDecorator,
          getFieldValue: this.getFieldValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
        return <Cmp {...this.props} form={form} />
      }
    }
  }
}

export default create
