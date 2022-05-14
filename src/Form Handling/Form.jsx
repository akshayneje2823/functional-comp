import React, { useState } from 'react'

function Form() {
    let [message,setMessage] = useState("")
    let changeHandler = (event) => {
        setMessage(message=event.target.value)
    }
  return (
    <div>
      <input className='my-2' type="text" value={message}  onChange={changeHandler}/>
    </div>
  )
}

export default Form
