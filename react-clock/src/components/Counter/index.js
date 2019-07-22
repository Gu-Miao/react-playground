import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Counter } from './style'
import couterStore from '../../store'


@observer
class Time extends Component {

    render() {
        console.log()
        return (
            <div>
                <Counter>{this.props.hour}</Counter>
                <Counter>{this.props.min}</Counter>
                <Counter>{this.props.sec}</Counter>
            </div>
        )
    }
}

export default Time