import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store'
import { inputValueChangeAction, addTodoItemAction, deleteTodoItemAction, getPrevTodoAction } from './store/actionCreators';
import TodolistUI from './TodolistUI';

import 'antd/dist/antd.css';

class Todolist extends Component {

    constructor(props) {
        super(props);
        // this.state = store.getState();
        // store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodolistUI
                inputValue={this.props.inputValue}
                handleInputChange={this.props.handleInputChange}
                addTodo={this.props.addTodo}
                list={this.props.list}
                deleteItem={this.props.deleteItem}
            />
        )
    }

    handleStoreChange = () => {
        this.setState(store.getState());
    }

    componentDidMount() {
        const action = getPrevTodoAction('http://localhost:8000/todolist');
        store.dispatch(action);
    }
}

const mapStateToProps = (state) => ({
    inputValue: state.get('inputValue'),
    list: state.get('list')
});

// store.dispatch()
const mapDispatchToProps = (dispatch) => ({
    handleInputChange(e) {
        const action = inputValueChangeAction(e.target.value);
        dispatch(action);
    },
    addTodo() {
        const action = addTodoItemAction();
        dispatch(action);
    },
    deleteItem(index) {
        const action = deleteTodoItemAction(index);
        dispatch(action);
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Todolist);