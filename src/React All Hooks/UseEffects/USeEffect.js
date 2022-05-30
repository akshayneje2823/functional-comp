import React,{useEffect, useState} from 'react'

function USeEffect() {
    const [Count, setCount] = useState(0);
    const [Name, setName] = useState('');

    useEffect(()=>{
        console.log("Use State is updating....")
        document.title = `You clicked the ${Count}`
    },[Count])

  return (
    <div>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}  />
        <button className='mt-5 ml-5' onClick={()=>setCount(Count +1)}>Click Me{Count}</button>
    </div>
  )
}

export default USeEffect