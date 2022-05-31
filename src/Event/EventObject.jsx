import React from 'react';

function EventObject() {
    const shoot = (a,b) =>{
        alert(b.type)
    }
  return (
    <div className="container bg-light mt-5">
        <div className="col-md-12 text-center mt-6">
            <button onClick={(event)=>shoot("Goal",event)} type="button" className="btn btn-primary">Take the shot!</button>
        </div>
    </div>
  )
}

export default EventObject
