
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/index'
import Layout from '../layout/index'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Layout {...this.props} store={store}/>
  }
}
