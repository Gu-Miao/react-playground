import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    LoginBox
} from './style';
import { loginAction } from '../../actions/action-creators';

class Login extends Component {

    render() {
        if(this.props.isLogin) {
            return <Redirect to="/" />
        } 
        return (
            <LoginBox>
                <h1>登录</h1>

                <input className="username" type="text" placeholder="用户名" />
                <input className="username" type="password" placeholder="密码" />
                <button
                    onClick={this.props.login}
                >登录</button>

            </LoginBox>
        );
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.get('isLogin')
});

const mapDispatchToProps = dispatch => ({
    login: () => {
        dispatch(loginAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);