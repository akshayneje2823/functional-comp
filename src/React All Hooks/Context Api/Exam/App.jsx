import React, { useState, createContext } from 'react';
import { useContext } from 'react';

// import './App.css';
// import Login from './Login'

const UserContext = createContext()

function App() {
    return (
        <div className='App'>
            <Component1 />
        </div>
    )
}

export function Component1() {
    const [user, setUser] = useState("Akshay Neje")
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}
export function Component2() {
    return (
        <div>
            <h1>Component2</h1>
            <Component3 />
        </div>
    )
}
export function Component3() {
    return (
        <div>
            {/* <h2>{props.user}</h2> */}
            <h1>Component3</h1>
            <Component4 />
        </div>
    )
}
export function Component4() {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Component4</h1>
            <h2>{`Hello ${user} Agian`}</h2>
        </div>
    )
}

export default App










