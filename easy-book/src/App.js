import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Header from './components/header';
import Home from './components/home';
import Detail from './components/detail/loadable';
import Login from './components/login';
import Look from './components/look';
import store from './store';

const history = createBrowserHistory();

function App() {
    const authcode = '12313'
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/look' exact component={Look}></Route>
                <Redirect to={{
                    pathname: '/look',
                    search: `?authcode=${authcode}`
                }}></Redirect>
            </Router>
        </Provider>
    );
}

export default App;
