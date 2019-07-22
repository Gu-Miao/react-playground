import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Counter } from './style'
import couterStore from '../../store'


@observer
class Time extends Component {

    componentWillMount() {
        couterStore.initTime()
    }

    render() {
        return (
            <div>
                <Counter>{couterStore.hourStr}</Counter>
                <Counter>{couterStore.minStr}</Counter>
                <Counter>{couterStore.secStr}</Counter>
            </div>
        )
    }

    componentDidMount() {
        setInterval(function() {
            couterStore.increaseSec()
        }, 1000)
    }
}

export default Time