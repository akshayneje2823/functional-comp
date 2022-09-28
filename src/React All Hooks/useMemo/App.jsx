import React, { useState, useMemo } from 'react'

function App() {
    const [count, setCount] = useState(0);

    const [add12, setAdd12] = useState(12)
    const countHandler = () => {
        setCount(count + 1)
    }

    const add12Handler = () => {
        setAdd12(add12 + 12)
    }

    // performing another task with count
    const memo = useMemo(function anotherTask() {
        console.log("Another Task")
        return count * 100
    }, [count])

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
            minHeight: '10vh'

        }}>
            <h1>useMemo Hook</h1>
            <h4>Count : {count}</h4>
            <h4>Add12 : {add12}</h4>
            {
                memo
            }
            <button onClick={countHandler}>Count</button>
            <br />
            <button onClick={add12Handler}>Add12</button>
        </div>
    )
}

export default App