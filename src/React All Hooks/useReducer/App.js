import React from 'react';

import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Card from './State And Props/Card';
import Reducer from './Reducer'
import Reducer1 from './Reducer1';
import fetchApi from './fetch API/fetchApi'


function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            <Route path='/card' element={<Card />}></Route>
            <Route path='/reduer' element={<Reducer />}></Route>
            <Route path='/reduer1' element={<Reducer1 />}></Route>
            <Route path='/fetchApi' element={<fetchApi />}></Route>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
