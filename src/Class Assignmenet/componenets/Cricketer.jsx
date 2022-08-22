import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Cricketer() {
    const [cricketer, setCricketer] = useState([]);

    return (
        <div className='container'>
            <div className="py-4">
                <h1>User Data</h1>
                <table className="table table-dark table-hover table border shadow">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to='/' className='btn btn-success btn-sm mr-2'>Edit</Link>
                                            <Link to='/' className='btn btn-warning btn-sm' onClick={() => deleteUser()}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
} 
