import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'
import RenderConfig from '../config/render-config'
import Header from '../components/header'
import Loader from '../components/loader'
import _ from 'lodash'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.actions.getUser()
  }

  render() {
    if(_.isEmpty(this.props.store.user))
      return <Loader />
    const Page = RenderConfig[this.props.page]
    ? RenderConfig[this.props.page].component
    : RenderConfig.notFound.component
    return (
      <div id="ipuff">
      {
        this.props.store.loader
        && <Loader />
      }
      <Header {...this.props} />
        <div className="main-content">
          <Page {...this.props} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(states) {
  return { store: states }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
