import React, { useContext } from "react"
import { ListContext, UPDATE_CITY, UPDATE_DIRECTION } from '../hooks/List'

const Filter = props => {
    const { filter: { city, direction }, dispatch } = useContext(ListContext)
    // console.log('city', dispatch)
    return (
        <div>
            <input value={city} onChange={e => dispatch({ type: UPDATE_CITY, city: e.target.value })} />
            <input value={direction} onChange={e => dispatch({ type: UPDATE_DIRECTION, direction: e.target.value })} />
        </div>
    )
}

export default Filter