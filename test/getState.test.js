import createStore from "../src/createStore"

describe('测试 getState 函数', () => {
  it('能正常返回 state', () => {
    const initState = {count: 1}

    const store = createStore(initState)

    expect(store.getState()).toEqual(initState)
  })
})
