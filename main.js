let initState = {
  count: 1
}

const createStore = (initState) => {
  let currentState = initState

  const getState = () => currentState

  const dispatch = (action) => {
    switch (action.type) {
      case 'plus':
        currentState = {
          ...currentState,
          count: currentState.count + action.payload
        }
    }
  }

  const subscribe = () => {}
}
