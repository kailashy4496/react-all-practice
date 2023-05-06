import React from 'react';
import "./App.css";

import Condition from './Components/ReactPractice/Condition';
import Ternary from './Components/ReactPractice/Ternary';
import Function from './Components/ReactPractice/Function';
import Class from './Components/ReactPractice/Class';
import Props from './Components/ReactPractice/Props';
import UsingState from './Components/ReactPractice/UsingState';
import UseEvent from './Components/ReactPractice/UseEvent';
import Person from './Components/AddStyleCss/Person';


function App() {
  return (
    <div>
      <Condition />
      <Ternary />
      <Function />
      <Class />
      <Props name='Class Component' />
      <UsingState />
      <UseEvent />
      <Person />
    </div>
  )
}

export default App
