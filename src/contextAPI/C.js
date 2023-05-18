import React, { Component } from 'react';
// import {mycontext} from "./A";
import { Consumer } from './context';

export class C extends Component {
    render() {
        return (
            <div>
                <h4>Component C</h4>
                <Consumer>
                    {data => <h3>{data.roll}</h3>}
                </Consumer>
            </div>
        )
    }
}

export default C;
