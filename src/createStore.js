const createStore = (initState, reducer) => {
  let currentState = initState

  const getState = () => currentState

  const dispatch = (action) => {
    currentState = reducer(currentState, action)
  }

  const subscribe = () => {}

  return { getState, dispatch, subscribe }
}

export default createStore
