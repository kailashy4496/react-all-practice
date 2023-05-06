import React from 'react';
import "./App.css";

import Condition from './Components/ReactPractice/Condition';
import Ternary from './Components/ReactPractice/Ternary';
import Function from './Components/ReactPractice/Function';
import Class from './Components/ReactPractice/Class';
import Props from './Components/ReactPractice/Props';
import UsingState from './Components/ReactPractice/UsingState';


function App() {
  return (
    <div>
      <Condition />
      <Ternary />
      <Function />
      <Class />
      <Props name='Class Component' />
      <UsingState />
    </div>
  )
}

export default App
