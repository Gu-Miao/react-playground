import { fromJS } from 'immutable';

const defaultState = fromJS({
    isLogin: false
});

export default (state = defaultState, action) => {

    switch (action.type) {
        case 'login':
            return state.set('isLogin', true);
        default:
            return state;
    }
};