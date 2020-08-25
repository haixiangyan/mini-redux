const applyMiddlewares = (store, middlewares) => {
  middlewares = [...middlewares] // 浅拷贝
  middlewares.reverse() // 循环替换 dispatch 的时候要进行翻转，每一个其实是在最里面
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

export default applyMiddlewares
