import ActionType from '../actionConstants'
export function firstTestAction(data) {
  return {
    type: ActionType.TEST_THE_DATA,
    data
  }
}

export function secondTestAction(inputData) {
  return {
    type: ActionType.CHANGE_THE_DATA,
    inputData
  }
}
