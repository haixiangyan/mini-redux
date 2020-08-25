import React from 'react'
import PropTypes from 'prop-types'

const _mapStateToProps = () => ({})
const _mapDispatchToProps = () => ({})

const connect = (mapStateToProps = _mapStateToProps, mapDispatchToProps = _mapDispatchToProps) => {
  return (Component) => {
    class Connect extends React.Component {
      componentDidMount() {
        this.context.store.subscribe(this.handleStoreChange.bind(this));
      }

      handleStoreChange() {
        // 触发更新
        // 触发的方法有多种,这里为了简洁起见,直接forceUpdate强制更新,读者也可以通过setState来触发子组件更新
        this.forceUpdate()
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        )
      }
    }

    Connect.contextTypes = {
      store: PropTypes.object
    }

    return Connect
  }
}

export default connect
