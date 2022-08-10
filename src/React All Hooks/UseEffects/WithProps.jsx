import React,{useEffect} from 'react'

function WithProps(props) {
    useEffect(()=>{
        alert("You Have Clicked on Count state")
      },[props.Count])
  
  return (
    <div>
        <h1>Count :{props.Count}</h1>
        <h1>Data :{props.Data}</h1>
    </div>
  )
}

export default WithProps