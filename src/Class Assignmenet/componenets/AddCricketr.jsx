import React, { useState } from 'react';
import Cricketer from './Cricketer';


function AddCricketer() {
    const [cricketer, setCricketer] = useState({
        name: "",
        role: "",
        age: ""
    });
    const [cricketers, setCricketers] = useState({});


    const onchangeHandler = (event) => {
        console.log(event.target.value)
        setCricketer({ ...cricketer, [event.target.name]: event.target.value });
    };


    const submitHandler = (event) => {
        event.preventDefault();
        setCricketers((oldCricketer)=>{
            return ({...oldCricketer,cricketer})
        })
        
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
                        placeholder="Enter your Age..."
                        name='age'
                        value={cricketer.age}
                        onChange={ event => onchangeHandler(event)}
                         />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
                    </div>
                </div>
                <div className="allData">
                    <Cricketer cricketers={cricketers}/>
                </div>
            </div>
        </>
    )
}

export default AddCricketer