import React from 'react'
import { run, register } from 'concent'

run({
    counter: {
        state: { count: 1 }
    }
})

@register('counter')
class Home extends React.Component {

    render() {
        return (
            <div></div >
        )
    }
}

export default Home