import reducer from "../src/reducer"

describe('reducer', () => {
  it('可以做加法', () => {
    const state = {count: 1}
    const addAction = {type: 'add', payload: 1}

    const nextState = reducer(state, addAction)

    expect(nextState).toEqual({count: 2})
  })
  it('可以做减法', () => {
    const state = {count: 1}
    const addAction = {type: 'sub', payload: 1}

    const nextState = reducer(state, addAction)

    expect(nextState).toEqual({count: 0})
  })
})
