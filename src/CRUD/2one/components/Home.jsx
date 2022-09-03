import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'

export default function Home() {

    let history = useNavigate()

    const deleteHandler = (id) =>{
        var index = Employee.map((newEmp)=>{
            return newEmp.id;
        }).indexOf(id)
        console.log(index)
        
        Employee.splice(index,1) ;

        history('/')
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
                <br />
                <br />
                <Link className='d-grid' to='/create'>
                    <Button size='lg'>Add Uer</Button>
                </Link>
            </div>
        </Fragment>
    )
}
