import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditUser() {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    });

    // destructing
    // const { name, phone, email } = user

    const onchangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const navigate = useNavigate();
    const { id } = useParams();
    // alert(id)

    const submitHandler = async event => {
        event.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}`, user);
        navigate('/')
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }

    useEffect(() => {
        loadUser()
    }, [])
    

    return (
        <>
            <div className="container mt-7">
                <div className="w-75 mx-auto shadow p-5">
                    <h1 className='text-center mb-4'>Edit User</h1>
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
                            <button className='btn btn-success btn-block'>Update User</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser