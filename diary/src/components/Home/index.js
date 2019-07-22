import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { observable } from "mobx"

class Home extends Component {

    id = Math.random()
    @observable title = ""
    @observable finished = false

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/login">login</Link>
            </div>
        )
    }
}

export default Home