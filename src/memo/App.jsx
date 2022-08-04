import React,{useState} from 'react'
import Dummy from './Dummy'
import './index.css'

function App() {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(10);

    const onclickHandler = () =>{
        setCount(count +1)
    }
    const onclickHandler2 = () =>{
        setdata(data +10)
    }
  return (
    <div className='App'>
        <h1>Home Component</h1>
        <p>{count}</p>
        <Dummy data={data}/>
        <button onClick={onclickHandler}>Click</button>
        <br />
        <button onClick={onclickHandler2}>Click</button>
        {/* Dummy WOrk */}

        <p className='offscreen'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim possimus est sed quam cumque! Facilis veniam quas porro pariatur similique incidunt obcaecati, explicabo hic placeat, unde, et totam? Labore.
        </p>
    </div>
  )
}

export default App