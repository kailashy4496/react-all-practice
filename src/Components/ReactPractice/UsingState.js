import React, { Component } from 'react';

class UsingState extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name: 'Ajay',
            age: '23'
        }
    }
  render() {
    return (
      <div>
        <h1>6 - Hello I am {this.state.name} yadav {this.state.age} .</h1>
      </div>
    )
  }
}

export default UsingState;
