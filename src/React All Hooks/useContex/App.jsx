import React, { createContext } from 'react';
import Comp1 from './Comp1';

const data1  = createContext();
const data2  = createContext();

function App() {

  const name = "Akshay"

  return (
    <data1.Provider value={name}>
      <h1>{`Hello ${name}!`}</h1>
      <Comp1 />
    </data1.Provider>
  );
}

export default App
export {data1}