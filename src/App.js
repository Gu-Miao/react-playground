import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '@/pages/Error'
import Home from '@/pages/Home'
import HOCForm from '@/pages/HOCForm'
import Dialog from '@/pages/Dialog'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={HOCForm} path="/hoc-form" />
        <Route exact component={Dialog} path="/dialog" />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
