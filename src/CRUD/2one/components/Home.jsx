import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';

export default function Home() {
    const deleteHandler = (id) =>{
        var index = Employee.map((newEmp)=>{
            return newEmp.id;
        }).indexOf(id)
        console.log(index)
        
        Employee.slice(index,1) 
    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length

                                ? Employee.map(item => {
                                    return <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>
                                            <Button className='ml-5' onClick={() => { alert(`edit id ${item.id}`) }}>
                                                <i className="fa-solid fa-user-pen" />
                                            </Button>
                                            <Button
                                            className='ml-5'
                                            onClick={() => deleteHandler(item.id)}
                                            >
                                            <i className="fa-solid fa-trash" />
                                            </Button>
                                        </td>
                                    </tr>
                                })

                                : "There is No data Available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}
