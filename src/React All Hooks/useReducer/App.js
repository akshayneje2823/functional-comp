import React from 'react';

import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>

            <Route path='/fetchApi' element={<fetchApi />}></Route>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
