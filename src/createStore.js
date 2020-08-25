const createStore = (initState, reducer) => {
  let currentState = initState
  let observers = [] // 观察者队列

  const getState = () => currentState

  const dispatch = (action) => {
    currentState = reducer(currentState, action)
    observers.forEach(fn => fn())
  }

  const subscribe = (fn) => {
    observers.push(fn)
  }

  // 初始化
  dispatch({type: '@@REDUX_INIT'})

  return { getState, dispatch, subscribe }
}

export default createStore
