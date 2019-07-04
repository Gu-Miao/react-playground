import { INPUT_VALUE_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes';
import axios from 'axios';


export const inputValueChangeAction = (value) => ({
    type: INPUT_VALUE_CHANGE,
    value
});

export const addTodoItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const deleteTodoItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initTodoListAction = (list) => ({
    type: INIT_TODO_LIST,
    list
});

export const getPrevTodoAction = (url) => dispatch => {
    axios.get(url)
        .then((res) => {
            const { data } = res;
            const action = initTodoListAction(data);
            dispatch(action);
        })
        .catch(err => console.log(err));
};