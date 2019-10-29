import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import estabConnectWithWS from './utils'

import './app.css'

const initalState = {
    data: [],
    value: ''
}

const UPDATE_DATA = 'UPDATE_DATA'
const UPDATE_VALUE = 'UPDATE_VALUE'
const UPDATE = 'UPDATE'

const reducer = (state, action) => {
    const reducerMap = new Map()
        .set(UPDATE_DATA, { ...state, data: action.data })
        .set(UPDATE_VALUE, { ...state, value: action.value })
        .set(UPDATE, { data: action.data, value: '' })

    const res = reducerMap.get(action.type)
    if (res) {
        return res
    } else {
        throw new Error(`ACTION_TYPE ${action.type} 不存在`)
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initalState)
    useEffect(() => {
        axios.post('/app/websocket/login.service', {
            username: 'gumiao',
            password: 'ab123',
            sign: 'asdfasdf'
        }).then(res => {
            console.log('res', res)
            estabConnectWithWS('ws://192.168.54.58:7000/websocket/asdfas')
        }).catch(err => {
            console.log('err', err)
        })
        
    }, [])

    const handleChange = e => dispatch({ type: UPDATE_VALUE, value: e.target.value })
    const handleSubmit = () => {
        console.log('提交内容', state.value)
        dispatch({
            type: UPDATE,
            data: [...state.data, state.value]
        })
    }

    return (
        <div>
            <h1>hello websocket</h1>
            <input type="text" value={state.value} onChange={handleChange} />
            <button onClick={handleSubmit}>submit</button>
            {
                state.data.map((item, index) => (
                    <div className="list-item" key={index}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default App