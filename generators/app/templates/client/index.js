import React, { Component } from 'react'
import { render } from 'react-dom'
import {store} from './store'
import { Provider } from 'react-redux'
import Routes from './router'

render(
  <Provider store={store}>
    <Routes />
  </Provider>
, document.getElementById('ReactApp'));
