import React, { Component } from 'react';

class UsingState extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: 'Ajay',
            age: '23'
        }
    }

    nameChangeHandler() {
        this.setState({
            name: 'Vijay Kumar',
            age: '21'
        })
    }
    render() {
        return (
            <div>
                <h1>6 - Hello I am {this.state.name} yadav, age - {this.state.age} .</h1>
                <br />
                <button onClick={this.nameChangeHandler.bind(this)}>Click Me</button>
            </div>
        )
    }
}

export default UsingState;
