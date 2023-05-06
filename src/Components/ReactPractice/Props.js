import React, { Component } from 'react';

export class Props extends Component {
constructor(props){
    super(props);
    this.props = props;
}

  render() {
    return (
      <div>
        <h1>5 - Hello there I am using props in {this.props.name} .</h1>
      </div>
    )
  }
}

export default Props
