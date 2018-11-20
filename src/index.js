import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Demo extends Component {
  render () {
    return (
      <div className="box">{this.props.box}</div>
    )
  }
}
ReactDOM.render(
  <Demo box="this is a b-box"/>,
  document.querySelector('#app')
)
