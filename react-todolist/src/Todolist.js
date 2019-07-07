import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputValueChangeAction, addTodoItemAction, deleteTodoItemAction, getPrevTodoAction } from './store/actionCreators';
import TodolistUI from './TodolistUI';

import 'antd/dist/antd.css';

class Todolist extends Component {

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

    componentDidMount() {
        this.props.getPrevTodo('http://localhost:8000/todolist');
    }
}

const mapStateToProps = (state) => ({
    inputValue: state.get('inputValue'),
    list: state.get('list')
});

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
    },
    getPrevTodo(url) {
        const action = getPrevTodoAction(url);
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);