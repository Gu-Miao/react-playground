import React from 'react';
import { Input, Button, List } from 'antd';

const TodolistUI = (props) => {

    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: '#333', padding: '5px' }}>
                <Input
                    placeholder="add todo..."
                    value={props.inputValue}
                    style={{ width: '300px', margin: '5px' }}
                    onChange={props.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={props.addTodo}
                >
                    Submit
                </Button>
            </div>
            <List
                style={{ margin: '10px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => props.deleteItem(index)}>
                        {item}
                    </List.Item>
                )}
            />
        </div >
    );
}

export default TodolistUI;