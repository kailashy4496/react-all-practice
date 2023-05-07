import React, { Component } from 'react';
import PersonStyle from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const style = {
            fontSize: "40px",
            color: "red",
        }
        return (
            <div className={PersonStyle.PersonBox}>
                <h2 >
                    <label className='Label'>Name</label> : {" "}
                    <i>{this.props.name}</i>
                    <br />
                    <label style={style}>Age</label> : {" "}
                    <i>{this.props.age}</i>
                </h2>
            </div>
        )
    }
}

export default Person;
