import React, { Component } from 'react';
import B from "./B";

export class A extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ajay Yadav'
        }
    }

    render() {
        return (
            <div>
                <h3>Hello Context API component A</h3>
                <B name={this.state.name} />
            </div>
        )
    }
}

export default A;
