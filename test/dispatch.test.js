import reducer from "../src/reducer"
import createStore from "../src/createStore"

describe('dispatch', () => {
  it('可以派发 action', () => {
    const initState = {count: 1}

    const store = createStore(initState, reducer)

    const addAction = {type: 'add', payload: 1}

    store.dispatch(addAction)

    expect(store.getState()).toEqual({count: 2})
  })
})
