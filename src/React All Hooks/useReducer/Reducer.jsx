import React, { useState } from 'react'
import './Example.css'

function Reducer() {
  const [count, setcount] = useState(0)
 
  let incrHandler = () => {
    setcount(count + 1);
  }
  let decrHandler = () => {
    setcount(count - 1);
  }
  return (
    <div>
     <p>{count}</p>
     <div className="button-details">
       <button onClick={incrHandler} className='btn btn-success mx-2'>Incr</button>
       <button onClick={decrHandler} className='btn btn-success mx-2'>Decr</button>
     </div>
    </div>
  )
}

export default Reducer
