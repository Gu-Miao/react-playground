import React, { Component } from 'react'
import { Card, Form, Icon, Input, Checkbox, Button } from 'antd'
import { observer } from 'mobx-react'

const { Item: FormItem } = Form

@observer
class Login extends Component {

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Card
                style={{ width: 360, cursor: 'default' }}
                headStyle={{ textAlign: 'center', fontSize: '1rem', fontWeight: 500 }}
                hoverable={true}
                title="登录"
            >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a style={{ float: 'right' }} href="/forgetpassword">
                            Forgot password
                         </a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '100%' }}
                        >
                            Login
                        </Button>
                        Or <a href="/register">register now!</a>
                    </FormItem>
                </Form>
            </Card>
        )
    }
}

export default Form.create({ name: 'login' })(Login)