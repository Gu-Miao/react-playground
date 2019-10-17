import React, { createContext, useReducer } from 'react'

export const ListContext = createContext()

const state = {
    city: '',
    direction: ''
}

export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_DIRECTION = 'UPDATE_DIRECTION'
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CITY:
            // console.log({ ...state, city: action.city })
            return { ...state, city: action.city }
        case UPDATE_DIRECTION:
            return { ...state, direction: action.direction }
        default:
            return state
    }
}

export const List = props => {
    const [filter, dispatch] = useReducer(reducer, state)
    return (
        <ListContext.Provider value={{ filter, dispatch }}>
            {props.children}
        </ListContext.Provider>
    )
}
