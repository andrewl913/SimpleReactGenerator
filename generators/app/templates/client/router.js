import React, { Component } from 'react'
import { history } from './store'
import {Router, Route} from 'react-router'

import App from './app'
import TestContainer from './components/containers/testContainer'

class Routes extends Component {
    render() {
      return (
          <Router history={history}>
              <Route path="/" component={App} />
              <Route path="/test" component={TestContainer} />
          </Router>
      )
    }
}


export default Routes
