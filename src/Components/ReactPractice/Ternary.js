import React from 'react'

export default function Ternary() {
    const x = 15;
  return (
    <div>
      <h1>2 - {(x) < 10 ? "Hello World !" : "Goodbye !"}</h1>
    </div>
  )
}
