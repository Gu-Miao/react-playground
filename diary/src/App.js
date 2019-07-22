import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { History } from 'history'

import Home from './components/Home'
import Login from './components/Login'
import Forgetpassword from './components/ForgetPassword'
import Register from './components/Register'
import Write from './components/Login'
import Error from './components/Error'

import 'antd/dist/antd.css'
import './style.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/forgetpassword" exact component={Forgetpassword} />
                    <Route path="/write" exact component={Write} />
                    <Route exact component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App