import { createStore , combineReducers } from 'redux'

import {browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//import reducers here
import {testReducer}  from './reducers/testReducer'

//end imports

const reducers = combineReducers({
  testReducer,
  routing: routerReducer
})

const store = createStore(reducers)

const history = syncHistoryWithStore(browserHistory, store)



export {store, history}
