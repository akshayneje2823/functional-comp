import React,{useReducer} from 'react';

const intialstate = 0;
const reducer = (state,action)=>{
    switch (action) {
        case "Incrememt":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return intialstate
        default:
            return state
    }
}

function App() {
   const [count, dipatch]=  useReducer(reducer,intialstate)
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={()=>{dipatch("Incrememt")}}>Increment</button>
        <button onClick={()=>{dipatch("Decrement")}}>Decrement</button>
        <button onClick={()=>{dipatch("Reset")}}>Reset</button>
    </div>
  )
}

export default App