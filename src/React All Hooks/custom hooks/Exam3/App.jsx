import React from 'react'
import useInput from './useInput/useInput';

function App() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput("");

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello, ${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    return (
        <div style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <form onSubmit={submitHandler}>
                <div style={{
                        marginTop : "10px"                        
                    }}>
                    <label >First Name</label>
                    <input
                        type="text"
                        {...bindFirstName} />
                </div>
                <div style={{
                        marginTop : "10px"                        
                    }}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...bindLastName} />
                </div>
                <button style={{
                    marginLeft : "80px" ,
                    marginTop : "10px"                   
                }} >Submit</button>
            </form>
        </div>
    )
}

export default App