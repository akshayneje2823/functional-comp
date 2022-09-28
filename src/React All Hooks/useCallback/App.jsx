import React, { useState, useCallback } from 'react'
import ChildA from './ChildA'
import './App.css'

function App() {

  const [first, setfirst] = useState(0);

  const [number, setnumber] = useState(100);

  const someTask = useCallback(() => {

    return console.log("Hello")

  }, [first]);

  return (
    <div className='App'>

      <ChildA someTask={someTask} first={first} />
      <h1>useCallBack Hook</h1>

      <h4>{first}</h4>
      <button onClick={() => { setfirst(first + 1) }}>Count</button>
      <br /><br />

      <h4>{number}</h4>
      <button onClick={() => { setnumber(number + 11) }}>number</button>

    </div>
  )
}

export default App