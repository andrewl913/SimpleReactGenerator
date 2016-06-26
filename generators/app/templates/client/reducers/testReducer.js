import ActionType from '../actionConstants'

const initialState = {
    data: 'Simple Starter App',
    inputData: 'enter some text'
}

export const testReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionType.TEST_THE_DATA:
      return Object.assign({}, state, {data: action.data})
    case ActionType.CHANGE_THE_DATA:
      return Object.assign({}, state, {inputData: action.inputData})
  default:
    return state

  }
}
