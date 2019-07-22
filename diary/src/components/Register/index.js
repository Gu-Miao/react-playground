import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observable } from "mobx"

class Register extends Component {

    id = Math.random()
    @observable title = ""
    @observable finished = false

    render() {
        return (
            <div>
                <h1>Register</h1>
                <Link to="/login">login</Link>
            </div>
        )
    }
}

export default Register