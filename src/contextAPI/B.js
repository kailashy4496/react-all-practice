import React, { Component } from 'react';
import C from "./C"

export class B extends Component {
    render() {
        return (
            <div>
                <div>Component B</div>
                <C name={this.props.name} />
            </div>
        )
    }
}

export default B;
