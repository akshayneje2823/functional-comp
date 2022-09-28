import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueID = ids.slice(0, 8);
    let newId = uniqueID

    let a = name,
      b = age;
      console.log(name);
      console.log(age)
    Employee.push({ id: newId, name: a, age: b });

    navigate('/')
  }
  return (
    <div>
      <Form className='d-gird gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control
            type='text'
            autoFocus
            placeholder='Enter Your Name....'
            required
            onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
          <Form.Control
            type='number'
            placeholder='Enter Your Age....'
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={(e) => submitHandler(e)}
          type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default Create