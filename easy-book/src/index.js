import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './style';
import Iconfont from './static/iconfont'
import App from './App';

ReactDOM.render((
    <Fragment>
        <Iconfont/>
        <GlobalStyle />
        <App />
    </Fragment>
), document.getElementById('root'));