import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const App = (props) => {
  return (
    <div>
      <button onClick={props.increment} >Increment</button>
      <button onClick={props.decrement} >Decrement</button>
      <div>Count: {props.countNb}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    countNb: state.count
  }
}

export default connect(mapStateToProps, {
  increment,
  decrement
})(App)