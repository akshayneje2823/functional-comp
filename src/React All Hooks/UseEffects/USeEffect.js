import React,{ useState} from 'react'
import WithProps from './WithProps';

function UseEffect() {
    const [Count, setCount] = useState(0);
    const [Data, setData] = useState(100)

  return (
    <div>
       <WithProps Count={Count} Data={Data}/>
        <button onClick={()=>setCount(Count + 1)}>Count{Count}</button>
        <br/>
        <br/>
        <button onClick={()=>setData(Data + 1)}>Data{Data}</button>
    </div>
  )
}

export default UseEffect