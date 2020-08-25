import 'jsdom-global/register'
import * as React from "react"
import Provider from "../src/Provider"
import enzyme from "enzyme"
import createStore from "../src/createStore"
import reducer from "../src/reducer"
import connect from "../src/connect"
import Adapter from "enzyme-adapter-react-16"

enzyme.configure({adapter: new Adapter()})

describe('connect', () => {
  it('可以获取 store 内容', () => {
    const state = {count: 0}

    const store = createStore(state, reducer)

    const Child = (props) => {
      return (
        <div className="child">{props.count}</div>
      )
    }

    const mapStateToProps = (state) => {
      return {count: state.count}
    }

    const ConnectedChild = connect(mapStateToProps)(Child)

    const App = () => (
      <Provider store={store}>
        <ConnectedChild/>
      </Provider>
    )

    const wrapper = enzyme.mount(<App/>)

    const count = wrapper.find('.child').text()

    expect(count).toEqual('0')
  })
  it('分发 action 时会更新组件', () => {
    const state = {count: 0}

    const store = createStore(state, reducer)

    const Child = (props) => {
      return (
        <div className="child">
          <button onClick={props.add} className="add-btn">Add</button>
          <div className="text">{props.count}</div>
        </div>
      )
    }

    const mapStateToProps = (state) => {
      return {count: state.count}
    }
    const mapDispatchToProps = (dispatch) => ({
      add: () => dispatch({type: 'add', payload: 1})
    })

    const ConnectedChild = connect(mapStateToProps, mapDispatchToProps)(Child)

    const App = () => (
      <Provider store={store}>
        <ConnectedChild/>
      </Provider>
    )

    const wrapper = enzyme.mount(<App/>)

    wrapper.find('.add-btn').props().onClick()

    const count = wrapper.find('.text').text()

    expect(count).toEqual('1')
  })
})
