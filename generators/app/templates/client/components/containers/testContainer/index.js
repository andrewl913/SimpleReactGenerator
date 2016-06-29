import React, {Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from './reduxMapping'
import {bindActionCreators} from 'redux'
import styles from './styles.scss'





class TestContainer extends Component {
  constructor() {
    super()
    //Container has been placed in memory but not yet rendered on the screen
    //Set up any variables here
  }

  componentDidMount() {
    //Container has rendered to the DOM
    //Access any refs to child components, set up AJAX requests or any timers here
  }


  componentWillUnmount() {
    //Perform any cleanup here, nullify timers, persist data in a database etc...
  }

  render() {
    return (
      <div className='featureText'>
        <h3>
          {this.props.getTestData()}
        </h3>

        <button className='featureButton' onClick={() => { this.props.testData() }}>
          Features
        </button>
        <br /><br />
        <input value={this.props.getInputData()} onChange={e => {this.props.changeData(e.target.value)}}></input>
        <br /><br />
        <button onClick= {() => {this.props.changeData('')}}>
          Clear Content
        </button>

      </div>
    )
  }
}


//Define Prop Types Here
TestContainer.propTypes = {
  getTestData: PropTypes.func.isRequired,

}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
