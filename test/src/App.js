import React, { useReducer, Fragment } from 'react'
import axios from 'axios'
import estabConnectWithWS from './utils'

import './app.css'

const initalState = {
    data: [],
    value: '',
    chatID: '',
    set: false,
    ws: null
}

const PUSH_DATA = 'PUSH_DATA'
const UPDATE_VALUE = 'UPDATE_VALUE'
const UPDATE_chatID = 'UPDATE_chatID'
const UPDATE_SET = 'UPDATE_SET'
const UPDATE_WS = 'UPDATE_WS'
const UPDATE = 'UPDATE'

const reducer = (state, action) => {
    const reducerMap = new Map()
        .set(PUSH_DATA, { ...state, data: [...state.data, action.data] })
        .set(UPDATE_VALUE, { ...state, value: action.value })
        .set(UPDATE_chatID, { ...state, chatID: action.chatID })
        .set(UPDATE_SET, { ...state, set: action.set })
        .set(UPDATE_WS, { ...state, ws: action.ws })
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

    const handleChange = e => {
        if (state.set === false) return
        // console.log(state.data)
        dispatch({ type: UPDATE_VALUE, value: e.target.value })
    }
    const changechatID = e => dispatch({ type: UPDATE_chatID, chatID: e.target.value })
    const handleSubmit = () => {
        // console.log('提交内容', state.value)
        state.ws.send(state.value)
        dispatch({ type: UPDATE_VALUE, value: '' })
    }
    const login = () => {
        dispatch({
            type: UPDATE_SET,
            set: true
        })
        axios.post('/app/websocket/login.service', {
            chatID: 'gumiao',
            password: 'ab123',
            sign: 'asdfasdf'
        }).then(res => {
            console.log('用户登录', res)
            const ws = estabConnectWithWS(`ws://192.168.54.58:7000/webSocket/chat/${state.chatID}`)
            ws.onmessage = res => {
                console.log('res', res, state)
                dispatch({
                    type: PUSH_DATA,
                    data: res.data
                })
            }
            dispatch({
                type: UPDATE_WS,
                ws
            })
        }).catch(err => {
            console.log('err', err)
        })
    }

    return (
        <div>
            {state.set && <h1>您进入了 {state.chatID} 聊天室</h1>}
            {
                state.set ||
                <Fragment>
                    <input
                        type="text"
                        value={state.chatID}
                        onChange={changechatID}
                        placeholder="请输入聊天室名"
                    />
                    <button onClick={login}>登录</button>
                    <br />
                </Fragment>
            }
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