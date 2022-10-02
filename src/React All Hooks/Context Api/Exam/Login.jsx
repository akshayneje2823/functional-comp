import React,{useState} from 'react'

function Login() {
    const [Username, setUsername] = useState("")
    const [ShowProfile, setShowProfile] = useState(false)
  return (
    <div>
        <h1>Login Page</h1>
        <input 
        type="text" 
        placeholder='Username' 
        value={Username} 
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <br />
        <br />
        <input 
        type="password" 
        placeholder='password' 
        /> <br /> <br />
        <button onClick={()=>{setShowProfile(true)}}>Login</button>
        {
            ShowProfile && <h1>{Username}</h1>
        }
    </div>
  )
}

export default Login