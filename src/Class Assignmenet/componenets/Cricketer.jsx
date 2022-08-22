import React from 'react';

export default function Cricketer(props) {

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
                        {
                            props.cricketers.map((newCrick)=>{
                                return <tr>
                                    <td>{newCrick.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
} 
