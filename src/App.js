import React, { useState } from "react";


function App() {
  const [value, setValue] = useState({
    emailAddress: "",
    Password: ""
  });
  const [submit, setSubmit] = useState(false);
  const [style,setstyle] = useState({
    color: "red"
  })
  const [valid,setValid] = useState(false)
  let ehandler = (event) => {
    setValue({ ...value, emailAddress: event.target.value })
    setstyle()
  }
  let passHandler = (event) => {
    setValue({ ...value, Password: event.target.value })
  }
  let submitHandler = (event) => {
    event.preventDefault();
    if (value.emailAddress && value.Password ) {
      setValid(true)
    };
    setSubmit(true);
    console.log()
  }
  return (
    <div className="container mt-5">
      <form onSubmit={submitHandler}>
      {submit && valid? <div className="success-message">Successfull! Thank Full</div> : null}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" onChange={ehandler}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          {submit && value.emailAddress ? <span style={style}>Please enter valid mail</span>: null}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" onChange={passHandler}>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          {submit && value.emailAddress ? <span style={style}>Please enter valid password</span>: null}
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default App
