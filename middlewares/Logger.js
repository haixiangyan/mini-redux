export const logger1 = (store) => {
  const next = store.dispatch

  return (action) => { // 返回新的 dispatch
    console.log('logger1')
    return next(action)
  }
}

export const logger2 = (store) => {
  const next = store.dispatch

  return (action) => {
    console.log('logger2')
    return next(action)
  }
}
