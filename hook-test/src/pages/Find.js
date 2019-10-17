import React, { useContext } from 'react'

import { ListContext } from '../hooks/List'

const ShowArea = (props) => {
    const { filter: { city, direction } } = useContext(ListContext)
    return (
        <div>
            城市:{city}
            <br />
            方向:{direction}
        </div>
    )
}

export default ShowArea