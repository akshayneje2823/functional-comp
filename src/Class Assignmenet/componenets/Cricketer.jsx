import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Cricketer() {
    const [cricketers, setCricketers] = useState([]);

    return (
        <div className='container'>
            <div className="py-4">
                <h1>Cricketers</h1>
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
                        <tr>
                            <th scope='row'>1</th>
                            <td>Akshay</td>
                            <td>Boller</td>
                            <td>22</td>
                            {/* <td>
                                <Link to='/' className='btn btn-success btn-sm mr-2'>Edit</Link>
                                <Link to='/' className='btn btn-warning btn-sm' onClick={() => { }}>Delete</Link>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
} 
