import React ,{ useState } from 'react'
import CustomHook from './CustomHook';

function Count() {
    const [count, setCount] = useState(0);
    CustomHook(count)
  return (
    <div className='App'>
        <h1>Cutom Hook</h1>
        <button onClick={()=>{setCount(count + 1)}}>Hit</button>
    </div>
  )
}

export default Count