import React, {Component} from 'react'
import { Link } from 'react-router'
import app from './app.css'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='centerContent'>
        <h1>React Simple Starter!</h1>
        <Link to={'/test'}> Find out more here! </Link>
      </div>
    )
  }
}

export default App
