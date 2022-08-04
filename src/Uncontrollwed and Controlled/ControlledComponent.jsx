import React,{useState} from 'react';
import './index.css'


function ControlledComponent() {
    const [state, setState] = useState({
        name:"",
        password:""
    })
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(event.preventDefault())
    }

    const onchangeHandler1 = (event)=>{
        
        setState(event.target.value)
    }
  return (
    <div className='App'>
        <h1>Controlled Components</h1>
        <form onSubmit={(event)=>{submitHandler(event)}}>
            <input 
            type="text" 
            placeholder='Name'
            value={state.name}
            onChange={onchangeHandler1}
            /> 
            <br /> <br />
            <input 
            type="password" 
            placeholder='password'
            value={state.password}
            onChange={onchangeHandler1}
            />
            <br /> <br />
            <button type='submit'>Submit</button>
        </form> 
    </div>
  )
}

export default ControlledComponent