import React from "react"
import ReactDOM from "react-dom"

import Find from './pages/Find'
import Filter from './pages/Filter'
import { List } from './hooks/List'

function App() {
    return (
        <div className="App">
            <List>
                <Find />
                <Filter />
            </List>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)