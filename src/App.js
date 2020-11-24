import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '@layout'
import router from './router'

function App() {
  return (
    <Suspense fallback="">
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            {router.map(({ component, title, ...restProps }, index) => (
              <Route
                key={index}
                {...restProps}
                render={props => {
                  if (title) document.title = title
                  const Component = lazy(() => import(`@pages/${component}`))
                  return <Component {...props} />
                }}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
