//Import your actions using destructuring from the appropriate actions in the client/actionCreators
import { firstTestAction, secondTestAction } from '../../../actionCreators/testActionCreators'

//Define any trivial data here.
const testApi = {
  features: [
    'React with JSX Support',
    'Update your app in real time with hot module reloading!',
    'Tiny Express Server',
    'ES6, Babel and webpack',
    'Baked in Redux with best practices'
  ]
}

let counter = 0
//-------------------------------------

//Redux Mappings
export function mapStateToProps(state) {
  return {
    getTestData: () => {
      return state.testReducer.data
    },
    getInputData: () => {
      return state.testReducer.inputData
    }
  }
}

export function mapDispatchToProps(dispatch) {

  return {
    testData: () => {
      counter = counter % 5 == 0 ? 0 : counter

      dispatch(firstTestAction(testApi.features[counter++]))
    },
    changeData: function(data) {

      dispatch(secondTestAction(data))
    }
  }
}
