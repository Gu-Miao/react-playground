import { fromJS } from 'immutable';

const defaultState = fromJS({
    inputValue: '',
    list: []
});

export default (state = defaultState, action) => {

    if (action.type === 'change_input_value') {

        return state.set('inputValue', action.value);
    }

    if (action.type === 'add_todo_item') {

        return state.merge({
            list: [...state.get('list'), state.get('inputValue')],
            inputValue: ''
        });
    }

    if (action.type === 'delete_todo_item') {
        const list = state.get('list');
        list.splice(action.index, 1);

        return state.set('list', list);
    }

    if (action.type === 'init_todo_list') {

        return state.set('list', action.list);
    }

    return state;
}