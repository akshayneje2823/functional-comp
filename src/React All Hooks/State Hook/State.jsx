import React, { useState } from 'react'

function State() {
    let [count,setCount] = useState(0);
    let incrHandler = () => {
      setCount(count+1)
    }
  return (
    <div>
      <button onClick={incrHandler}>Counter {count}</button>
    </div>
  )
}

export default State
