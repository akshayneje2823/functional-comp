import React, { useState } from 'react'
import "./App.css"
function Example1() {
  const [variable, setVariable] = useState("You will see change here");

  let changeHandler = (event) => {
    const newVariable = event.target.value;
    setVariable(newVariable);
  }
  return (
    <div>
      <h1>useState allows - string ,number ,object</h1>
      <hr />
      <input type="text" placeholder='write something' onChange={changeHandler}/> <button>{variable}</button>
    </div>
  )
}

export default Example1
