import React, { useState } from 'react';


function AddCricketer() {
    const [cricketer, setCricketer] = useState({
        name: "",
        role: "",
        age: ""
    });


    const onchangeHandler = (event) => {
        console.log(event.target.value)
        setCricketer({ ...cricketer, [event.target.name]: event.target.value });
    }

    const submitHandler = event => {
        event.preventDefault();

    }



    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5">
                    <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Enter your Name..."
                        name='name'
                        value={cricketer.name}
                        onChange={ event => onchangeHandler(event)}
                         />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Enter your Role..."
                        name='role'
                        value={cricketer.role}
                        onChange={ event => onchangeHandler(event)}
                         />
                    </div>
                    <div className="form-group">
                        <input 
                        type="number" 
                        className="form-control form-control-lg" 
                        placeholder="Enter your Role..."
                        name='age'
                        value={cricketer.age}
                        onChange={ event => onchangeHandler(event)}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCricketer