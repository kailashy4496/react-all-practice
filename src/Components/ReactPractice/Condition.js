import React from 'react'

export default function Condition() {
    const x = 5;
    let text = "Goodbye !";
    if (x < 10){
        text = "Hello World !";
    }
  return (
    <div>
      <h1>1 - {text}</h1>
    </div>
  )
}
