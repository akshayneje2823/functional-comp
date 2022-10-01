import React from 'react';
import useCount from './hooks/useCount';

function App() {
    const data = useCount()
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>Count : {data.count}</h1>
            <button onClick={data.increHandler}>Click</button>
        </div>
    )
}

export default App