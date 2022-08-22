import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddUser() {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    });

    // destructing
    // const { name, phone, email} = user

    const onchangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const navigate = useNavigate()

    const submitHandler = async event => {
        event.preventDefault();
        await Axios.post('http://localhost:3003/users', user);
        navigate('/')
    }



    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h1 className='text-center mb-4'>Add User</h1>
                    <form action="" onSubmit={submitHandler}>
                        <div className="">
                            <div className="form-group">
                                <input
                                    autoFocus
                                    type="text"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Name'
                                    name='name'
                                    value={user.name}
                                    onChange={event => onchangeHandler(event)} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Phone Number'
                                    name='phone'
                                    value={user.phone}
                                    onChange={event => onchangeHandler(event)} />
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    className='form-control form-control-lg'
                                    placeholder='Enter your Email'
                                    name='email'
                                    value={user.email}
                                    onChange={event => onchangeHandler(event)} />
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