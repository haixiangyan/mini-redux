const applyMiddlewares = (...middlewares) => createStore => reducer => {
  const store = createStore(reducer)

  let {getState, dispatch} = store

  const params = {
    getState,
    dispatch: action => dispatch(action) // 避免中间件公用一个 dispatch
  }

  const middlewareList = middlewares.map(middleware => middleware(params))

  dispatch = compose(...middlewareList)(dispatch)

  return {...store, dispatch}
}

// compose这一步对应了middlewares.reverse()
const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((res, cur) => (...args) => res(cur(...args)))
}

export default applyMiddlewares
