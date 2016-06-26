import { createStore , combineReducers } from 'redux'

//import reducers here
import {testReducer}  from './reducers/testReducer'




//end imports

const reducers = combineReducers({
  testReducer
})

export default createStore(reducers)
