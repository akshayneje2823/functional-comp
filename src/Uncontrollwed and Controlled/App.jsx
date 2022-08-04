import React from 'react';
import './index.css'

function App() {
      
    const name = React.createRef()
    const password = React.createRef()

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("Hello")
        console.log(name.current.value)
        console.log(password.current.value)
        console.log(password.current.placeholder)

    }
  

  return (
    <div className='App'>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={(event)=>{submitHandler(event)}}>
            <input 
            type="text" 
            placeholder='Name' 
            ref={name}
            /> 
            <br /> <br />
            <input 
            type="password" 
            placeholder='password'
            ref={password}
            />
            <br /> <br />
            <button type='submit'>Submit</button>
        </form> 
    </div>
  )
}

export default App