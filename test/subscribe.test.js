import createStore from "../src/createStore"
import reducer from "../src/reducer"

describe('subscribe', () => {
  it('可以监听变化', () => {
    const initState = {count: 1}

    const store = createStore(initState, reducer)

    const mockFn1 = jest.fn()
    const mockFn2 = jest.fn()

    store.subscribe(mockFn1)
    store.subscribe(mockFn2)

    store.dispatch({type: 'add', payload: 1})

    expect(mockFn1).toBeCalled()
    expect(mockFn2).toBeCalled()
  })
})
