import createStore from "../src/createStore"
import reducer, {initState} from "../src/reducer"

describe('getState', () => {
  it('能正常返回 state', () => {
    const store = createStore(reducer)

    expect(store.getState()).toEqual(initState)
  })
})
