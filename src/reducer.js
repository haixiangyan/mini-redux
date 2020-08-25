const reducer = (state, action) => {
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
      return state
  }
}

export default reducer
