import React, { Component } from 'react';
import { observable } from "mobx";

class Home extends Component {

    id = Math.random();
    // @observable title = "";
    // @observable finished = false;

    render() {
        return (
           <div>Home</div>
        )
    }
}

export default Home;