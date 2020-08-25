import createStore from "../src/createStore"
import reducer from "../src/reducer"

describe('getState', () => {
  it('能正常返回 state', () => {
    const initState = {count: 1}

    const store = createStore(initState, reducer)

    expect(store.getState()).toEqual(initState)
  })
  it('状态为 undefined 时，reducer 的初始状态', () => {
    const store = createStore(undefined, reducer)

    expect(store.getState()).toEqual({count: 0})
  })
})
