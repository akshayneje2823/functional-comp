import React from 'react';
import './App.css'

function App() {
    const [data, setData] = React.useState({ name: "Akshay", age: 23 });;
    // const [getData, setGetData] = React.useState('')

    // const submitHandler = (e) => {
    //     const [name , age ] = e.target;
    //     console.log('Clicked')
    //     setGetData(prevData =>{
            
    //         return {
    //             ...prevData,
    //             [name] : age
    //         }
    //     })
    // }
    return (
        <div className='App'>
            <h1>State With Object</h1>
            <input
                autoFocus
                type="text"
                placeholder='Enter Name'
                value={data.name}
                onChange={(e) => { { setData({ ...data, name: e.target.value }) } }}
            />
            {/* <input type="text" placeholder='Enter Name'value={data.name} onChange={(e)=>{{setData({age:data.age,name:e.target.value})}}} /> */}
            <br />
            <input
                type="number"
                placeholder='Enter Age'
                value={data.age}
                onChange={(e) => { { setData({ ...data, age: e.target.value }) } }}
            />
            {/* <input type="text" placeholder='Enter Age' value={data.age} onChange={(e)=>{{setData({name:data.name:e.target.value})}}}/> */}
            <br />
            {/* <button type='submit' onSubmit={submitHandler}>submit</button>
            <p>{getData.name}</p> */}
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}

export default App