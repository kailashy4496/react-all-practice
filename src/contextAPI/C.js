import React, { Component } from 'react'

export class C extends Component {
  render() {
    return (
      <div>
        <div>C component</div>
        {this.props.name}
      </div>
    )
  }
}

export default C
