import React, { useState } from 'react';


function AddUser() {
    const [user, setUser] = useState({
        name: "",
        phone_number: "",
        email: ""
    });

    // destructing
    // const [name,phone_number,email] = user
    const submitHandler = (event) => {
        event.preventDefault()
    }

    const onchangeHandler = (event) => {
        setUser({[event.target.value] : event.target.value})
    }
    return (
        <>
            <div className="container mt-7">
                <div className="w-75 mx-auto shadow p-5">
                    <h1 className='text-center mb-4'>Add User</h1>
                    <form action="" onSubmit={submitHandler}>
                        <div className="">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Name'
                                    name='name'
                                    value={user.name}
                                    onChange={ event => onchangeHandler(event) } />
                            </div>
                            <div className="form-group">
                                <input
                                    type="phone-number"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Phone Phone'
                                    name='phone'
                                    value={user.phone_number}
                                    onChange={ event => onchangeHandler(event) } />
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Email'
                                    name='email'
                                    value={user.email}
                                    onChange={ event => onchangeHandler(event) } />
                            </div>
                            <button className='btn btn-primary btn-block'>Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUser