export const logger1 = store => next => action => {
  console.log('logger1')
  return next(action)
}

export const logger2 = store => next => action => {
  console.log('logger2')
  return next(action)
}
