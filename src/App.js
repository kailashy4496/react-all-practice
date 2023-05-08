import React, { Component } from 'react';
import "./App.css";


// import Condition from './Components/ReactPractice/Condition';
// import Ternary from './Components/ReactPractice/Ternary';
// import Function from './Components/ReactPractice/Function';
// import Class from './Components/ReactPractice/Class';
// import Props from './Components/ReactPractice/Props';
// import UsingState from './Components/ReactPractice/UsingState';
// import UseEvent from './Components/ReactPractice/UseEvent';
import Person from './Components/AddStyleCss/Person';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: 'Ajay Yadav',
          age: 23,
        },
        {
          id: 2,
          name: 'Vijay Yadav',
          age: 21,
        },
        {
          id: 3,
          name: 'Abhishek Yadav',
          age: 19,
        },
        {
          id: 4,
          name: 'Abhay Yadav',
          age: '3 month',
        },
      ],
      isShow: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState({ isShow: !this.state.isShow});
  }

  render() {
    let persons;
    persons = this.state.persons.map((p, index) => {
      return <Person key={index} name={p.name} age={p.age} />
    });
    console.log(this.state.isShow);
    return (
      <div className='App' >
        {/* <Condition />
        <Ternary />
        <Function />
        <Class />
        <Props name='Class Component' />
        <UsingState />
        <UseEvent /> */}
        <button onClick={this.toggleHandler}>Show/Hide</button>
        {this.state.isShow === true ? persons : ""}
      </div>
    )
  }
}

export default App;
