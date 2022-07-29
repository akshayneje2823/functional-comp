import React, { useState } from 'react'

function Form() {
    const [Data, setData] = useState({
        Email: "",
        Password: "",
        mailError:"",
        passError:""
    })

    const valid = ()=>{
        if(!Data.Email.includes(",","<","?")){
            setData(Data.mailError("InvalidName"))
        }
    }

    const submitHandler =()=>{
        if(valid()){
            alert("submited")
        }
    }
    const onchangeHandler =(e)=>{
        setData(e.target.value);
        
    }
    return (
        <div>
                <label htmlFor="Name">Enter Your Email</label> <br />
                <input 
                value={Data.Email}
                type="email" 
                placeholder='email' 
                onChange={onchangeHandler}/>
                <br /><br />
                <label htmlFor="Password">Password</label><br />
                <input 
                value={Data.Password}
                type="password" 
                placeholder='password' 
                onChange={onchangeHandler}
                
                />
                <p style={{color:"red",fontSize:"14px"}}>{Data.passError}</p>
                <br /><br />
                
                <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Form