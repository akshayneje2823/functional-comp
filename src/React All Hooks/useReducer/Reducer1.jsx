import React, { useReducer } from 'react';
import './Example.css'

let initialState = 0

const reducer = (state,action)=>{
  console.log(state,action)
  if(action.type === "INCREMENT")
      return state +1                                        
  if(action.type === "DECREMENT")
      return state -1
   return state                      /* It needs to return something */
}

const  Reducer1 = () => {

  // const[const,setcount] = useState(0)

  const [state,dispatch] = useReducer(reducer,initialState);
  
  return (
    <div>
    <p>{state}</p>
    <div className="button-details">
      <button onClick={()=>{dispatch({type:"INCREMENT"})}} className='btn btn-success mx-2'>Incr</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}} className='btn btn-success mx-2'>Decr</button>
    </div>
   </div>
  )
}

export default Reducer1