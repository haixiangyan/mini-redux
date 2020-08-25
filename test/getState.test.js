import createStore from "../src/createStore"
import reducer from "../src/reducer"

describe('getState', () => {
  it('能正常返回 state', () => {
    const initState = {count: 1}

    const store = createStore(initState, reducer)

    expect(store.getState()).toEqual(initState)
  })
})
