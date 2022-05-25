import React, { useState } from 'react'

function State() {
    let [count,setCount] = useState(0,1);
    let incrHandler = () => {
      setCount(count + 1)
    }
    let decrHandler = () => {
      setCount(count - 1)
    }
  return (
    <div>
      <button className='btn btn-success mx-2' onClick={decrHandler}>-</button>
      <span>{count}</span>
      <button className='btn btn-danger mx-2' onClick={incrHandler}>+</button>
    </div>
  )
}

export default State
