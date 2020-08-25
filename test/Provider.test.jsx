import 'jsdom-global/register'
import * as React from "react"
import Provider from "../src/Provider"
import enzyme from "enzyme"
import createStore from "../src/createStore"
import reducer from "../src/reducer"
import Adapter from 'enzyme-adapter-react-16'
import PropTypes from "prop-types"

enzyme.configure({adapter: new Adapter()})

describe('Provider', () => {
  it('子组件通过 this.context.store 获取全局状态', () => {
    const store = createStore(reducer)

    class Child extends React.Component {
      static contextTypes = {
        store: PropTypes.object
      }

      render() {
        return (
          <div className="child">
            {this.context.store.getState().count}
          </div>
        )
      }
    }

    const App = () => (
      <Provider store={store}>
        <Child />
      </Provider>
    )

    const wrapper = enzyme.mount(<App/>)

    const count = wrapper.find('.child').text()

    expect(count).toEqual('0')
  })
})
