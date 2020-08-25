import reducer, {initState} from "../src/reducer"

describe('reducer', () => {
  it('可以做加法', () => {
    const addAction = {type: 'add', payload: 1}

    const nextState = reducer(initState, addAction)

    expect(nextState).toEqual({count: 1})
  })
  it('可以做减法', () => {
    const addAction = {type: 'sub', payload: 1}

    const nextState = reducer(initState, addAction)

    expect(nextState).toEqual({count: -1})
  })
  it('没有命中 action type 时，返回原始状态', () => {
    const addAction = {type: 'xxx', payload: 1}

    const nextState = reducer(initState, addAction)

    expect(nextState).toEqual(initState)
  })
})
