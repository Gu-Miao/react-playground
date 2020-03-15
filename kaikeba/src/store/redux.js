const createStore = reducer => {
  let currentState = undefined
  let currentListener = []
  const getState = () => {
    return state
  }
  const dispatch = action => {
    currentState = reducer(currentState, action)
    currentListener.forEach(listener => {
      listener()
    })
  }
  const subscribe = listener => {
    currentListener.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
