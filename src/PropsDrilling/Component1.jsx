import React ,{useState}from 'react';
import Componenet2 from './Componenet2';

function Component1() {
  const [User, setUser] = useState("Props Drilling")
  return (
    <div>
      <h1>
        {User}
        <Componenet2 User={User} />
        <button onClick={()=>setUser("Hello good morning")}></button>
      </h1>
    </div>
  )
}

export default Component1