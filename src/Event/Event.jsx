import React from 'react'

function Event() {
  const shot = () =>{
      alert("You Clicked")
  }
  return (
    <div>
        <button type='button' onClick={shot} style={{textAlign:"center"}}>Take the shot</button>
    </div>
  )
}

export default Event