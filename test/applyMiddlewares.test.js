import createStore from "../src/createStore"
import reducer from "../src/reducer"
import {logger1, logger2} from "../middlewares/Logger"
import applyMiddlewares from "../src/applyMiddlewares"

describe('applyMiddlewares', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'log')
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('正确执行中间件', () => {
    const initState = {count: 0}

    const store = createStore(initState, reducer)

    applyMiddlewares(store, [logger1, logger2])

    store.dispatch({type: 'add', payload: 1})

    expect(console.log).toBeCalledTimes(2)
    expect(console.log).toHaveBeenNthCalledWith(1, 'logger1')
    expect(console.log).toHaveBeenNthCalledWith(2, 'logger2')
  })
})
