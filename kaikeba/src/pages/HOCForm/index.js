import React, { Component } from 'react'
import Layout from '@/components/Layout'
import Form from '@/components/Form'

const { Item: FormItem, create } = Form

class HOCForm extends Component {
  login = e => {
    e.preventDefault()
    const { validateFields } = this.props.form
    // const userInfo = getFieldsValue()
    // console.log('userInfo', userInfo)
    validateFields((err, values) => {
      if (err) {
        console.error(err)
      } else {
        console.log(values)
      }
    })
  }
  render() {
    console.log('props', this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <Layout>
        <h1>HOCForm Login</h1>
        <Form onSubmit={this.login}>
          <FormItem label="username">
            {getFieldDecorator('username', {
              initialValue: '',
              isRequire: true,
              trigger: 'change',
              rules: [
                {
                  reg: /^[a-zA-Z]\w{4,15}$/,
                  message: '用户名必须由英文开头，5-16位数字字母或下划线组成'
                }
              ]
            })(<input type="text" />)}
          </FormItem>
          <FormItem label="password">
            {getFieldDecorator('password', {
              isRequire: true,
              trigger: 'change',
              rules: [
                {
                  reg: /^[a-z]+$/,
                  message: '密码只能由小写字母组成'
                }
              ]
            })(<input type="password" />)}
          </FormItem>
          <button type="submit">login</button>
        </Form>
      </Layout>
    )
  }
}

export default create()(HOCForm)
