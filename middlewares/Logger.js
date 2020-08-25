export const logger1 = store => next => action => {
  console.log('进入logger1')
  const result = next(action)
  console.log('离开logger1')
  return result
}

export const logger2 = store => next => action => {
  console.log('进入logger2')
  const result = next(action)
  console.log('离开logger2')
  return result
}
