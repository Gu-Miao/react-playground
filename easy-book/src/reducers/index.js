import { combineReducers } from 'redux';

import headerReducer from './header';
import homeReducer from './home';
import detailReducer from './detail';
import loginReducer from './login';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});