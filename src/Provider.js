import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  // 指定 context 对象类型
  static childContextTypes = {
    store: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
  }

  // 返回 context 的对象
  getChildContext() {
    return {store: this.props.store}
  }

  render() {
    return this.props.children
  }
}

export default Provider
