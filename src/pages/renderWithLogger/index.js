import React, { useEffect, Component } from 'react'

/**
 * Both hoc and hooks can carry out abstract logic
 */

function useLogger() {
  useEffect(() => {
    console.log('rendering...')
  }, [])
}

function withLogger(WrappedComponent) {
  return class WithLogger extends Component {
    render() {
      console.log('rendering...')
      return <WrappedComponent {...this.props} />
    }
  }
}

const RenderWithLogger = () => {
  useLogger()
  return <div>render something...</div>
}

export default withLogger(RenderWithLogger)
