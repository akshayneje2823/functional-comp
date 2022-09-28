import React, { useState } from 'react'
import ChildA from './ChildA'
import './App.css'

function App() {
  const [first, setfirst] = useState(0);
  const someTask = () => {
    return console.log("Hello")
  }
  return (
    <div className='App'>
      <h1>useCallBack Hook</h1>
      <h4>{first}</h4>
      <button onClick={() => { setfirst(first + 1) }}>Count</button>
      <ChildA someTask={someTask}/>
    </div>
  )
}

export default App