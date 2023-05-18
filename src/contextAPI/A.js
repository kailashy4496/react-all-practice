import React, { Component } from 'react';
import B from "./B";
import C from "./C";
import { Provider } from './context';

// export const mycontext = React.createContext();
export class A extends Component {

    state = {
        name: 'Ajay Yadav',
        roll: '42'
    }
    handleClickContext = () => {
        this.setState({ roll: this.state.roll + 1 })
    };

    render() {
        const contextValue = {
            data: this.state,
            handlecheck: this.handleClickContext
        }
        return (
            <div>
                <h3> Component A</h3>
                <Provider value={contextValue}>
                    <B />
                    <C />
                </Provider>
            </div>
        )

    }
}

export default A;
