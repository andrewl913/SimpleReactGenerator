import React, {Component} from 'react'
import { Link } from 'react-router'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>React Simple Starter!</h1>
        <Link to={'/test'}> Find out more here! </Link>

      </div>
    )
  }
}

export default App
