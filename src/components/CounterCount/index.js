import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  OnDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  Reset = () => {
    this.setState(prevState => ({count: prevState.count - prevState.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="back">
        <h1> Counter</h1>
        <p>{count}</p>
        <div>
          <button type="button" onClick={this.OnIncrement}>
            Increase
          </button>
          <button type="button" onClick={this.Reset}>
            Reset
          </button>
          <button type="button" onClick={this.OnDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
