import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: ['java', 'html5', 'css', 'flexbox', 'vue', 'react', 'next.js', 'nuxt.js',
        'java', 'html5', 'css', 'flexbox', 'vue', 'react', 'next.js', 'nuxt.js',
        'java', 'html5', 'css', 'flexbox', 'vue', 'react', 'next.js', 'nuxt.js',
        'java', 'html5', 'css', 'flexbox', 'vue', 'react', 'next.js'
    ],
    totalPage: 4,
    page: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {

    switch (action.type) {
        case 'search_focus':
            return state.set('focused', true);
        case 'search_blur':
            return state.set('focused', false);
        case 'refresh_hot_list':
            return state.set('page', action.page);
        case 'panel_mouseenter':
            return state.set('mouseIn', true);
        case 'panel_mouseout':
            return state.set('mouseIn', false);
        default:
            return state;
    }
};