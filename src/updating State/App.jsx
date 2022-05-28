import React from 'react'

function App() {
    const [car, setcar] = useState({
        brand: "Ford",
        year: 1999,
        model: "Mustag",
        color: "red"
    });
    let updateHandler = () => {
        setcar({ ...car, color: "blue" })
    }

    return (
        <div>
            <h1>My{car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type='button' onClick={updateHandler}>Blue</button>
        </div>
    )
}

export default App