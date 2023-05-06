import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
      <div className='Style'>
        <h2 >Using Css in Person.js</h2>
      </div>
    )
  }
}

export default Person;
