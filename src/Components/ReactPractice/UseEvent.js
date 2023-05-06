import React, { Component } from 'react'

class UseEvent extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            demo: 'Testing',
        };
        // this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler = () =>{
        // alert('Hello');
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h3>I am using Event</h3>
        <button type='button' onClick= { () => this.buttonClickHandler()}>Hit Me</button>
      </div>
    )
  }
}

export default UseEvent
