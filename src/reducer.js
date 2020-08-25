export const initState = {count: 0}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'sub':
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return initState
  }
}

export default reducer
