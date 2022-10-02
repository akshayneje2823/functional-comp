import React, { useContext } from 'react'
import { data1 } from './App'



function Comp3() {
    const name = useContext(data1)
    return (
        <div>
            <h1>Component 3</h1>
            <h3>Hello {name} Agnain</h3>
            <hr />
        </div>
    )
}

export default Comp3