import React from 'react'

function Event2() {
    const shoot = (a) => {
        alert(a)
    }
  return (
    <div className="container bg-light mt-5">
        <div className="col-md-12 text-center mt-6">
            <button onClick={()=>shoot("Goal")} type="button" className="btn btn-primary">Take the shot!</button>
        </div>
    </div>
  )
}

export default Event2