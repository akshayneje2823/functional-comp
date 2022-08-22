import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function View() {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        loadUser()
    }, [])

    const { id } = useParams();

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    };



    return (
        <>
            <div className="container py-4">
                <Link to='/' className='btn btn-secondary'>Back To Home</Link>
                <h4>User:{id}</h4>
                <hr />
                <ul className='list-group w-50'>
                    <li className='list-group-item'>Name  : {user.name} </li>
                    <li className='list-group-item'>Phone : {user.phone} </li>
                    <li className='list-group-item'>Email : {user.email} </li>
                </ul>
            </div>
        </>
    )
}
