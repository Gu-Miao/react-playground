import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Write from './components/Login';
import Error from './components/Error';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/write" exact component={Write} />
                    <Route exact component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;