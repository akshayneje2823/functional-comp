import React, { useState } from 'react'
import useDocument from './useDocumentHook/useDocument';

function App() {
    const [count, setCount] = useState(0);
    useDocument(count)
    return (
        <div style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default App