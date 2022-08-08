import React,{useReducer} from 'react';

const initialState = {count:0}

const reducer = (state,action) =>{
    switch(action.type){
        case "Increment":
        return {count:state.count + 1};
        case "Decrement":
            return {count:state.count -1}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
        <h1>UseReducer Hook</h1>
        <h3>Count {state.count}</h3>
        <button onClick={()=>{dispatch({type: "Increment"})}}>Increment</button> <br />
        <button onClick={()=>{dispatch({type: "Decrement"})}}>Decrement</button>
    </div>
  )
}

export default App