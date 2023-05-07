import React, { Component } from 'react';
import "./App.css";


import Condition from './Components/ReactPractice/Condition';
import Ternary from './Components/ReactPractice/Ternary';
import Function from './Components/ReactPractice/Function';
import Class from './Components/ReactPractice/Class';
import Props from './Components/ReactPractice/Props';
import UsingState from './Components/ReactPractice/UsingState';
import UseEvent from './Components/ReactPractice/UseEvent';
import Person from './Components/AddStyleCss/Person';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: 'Ajay Yadav',
          age: '23',
        },
        {
          name: 'Vijay Yadav',
          age: '21'
        },
        {
          name: 'Abhay Yadav',
          age: '3 month'
        },
      ],
    };
  }

  render() {
    return (
      <div className='App' >
        <Condition />
        <Ternary />
        <Function />
        <Class />
        <Props name='Class Component' />
        <UsingState />
        <UseEvent />
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App;
