import React, { useState } from 'react'

function Example() {
    let [msg,setMsg] = useState("")
    
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-6">
                    <div className="form">
                        <form className="signup">
                            <div className="form-group"><input type="text" className="form-control" placeholder="Username" value={msg} onChange={} /></div>
                            <div className="form-group"><input type="password" className="form-control" placeholder="password" /></div> <button type="button" className="btn btn-primary">Login</button>
                            <div className="row">
                                <div className="col-6 col-sm-6">
                                    <a href="#"><p className="text-left pt-2 ml-1">Forgot password?</p></a>
                                </div>
                                <div className="col-6 col-sm-6">
                                    <a href="#"> <p className="text-right pt-2 mr-1">Sign Up Now</p></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex mx-auto pt-1 pb-3"> <a href="#"><i className="fab fa-facebook"></i></a> <a href="#"><i className="fab fa-twitter"></i></a> <a href="#"><i className="fab fa-linkedin"></i></a> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example
