import React, { Component } from 'react'
import { render } from 'react-dom'
import store from './store'
import TestContainer from './components/containers/testContainer'
import { Provider } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <TestContainer />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('ReactApp'));
