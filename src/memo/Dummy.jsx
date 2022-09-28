import React, { memo } from 'react'

function Dummy(props) {
  console.log("Inner Component")
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}

export default memo(Dummy)