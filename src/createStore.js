const createStore = (initState, reducer) => {
  let currentState = initState

  const getState = () => currentState

  const dispatch = (action) => {
    currentState = reducer(currentState, action)
  }

  const subscribe = () => {}

  // 初始化
  dispatch({type: '@@REDUX_INIT'})

  return { getState, dispatch, subscribe }
}

export default createStore
