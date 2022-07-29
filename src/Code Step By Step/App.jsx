import React,{useState} from 'react'

function App() {
    const [toggle, settoggle] = useState(true)

    const onClickHandler = () =>{
        settoggle(!toggle)
        
    }
  return (
    <div>
        {
            toggle ? <h1>HIde Text</h1> :null
        }
        <button onClick={onClickHandler}>Click Me</button>
    </div>
  )
}

export default App