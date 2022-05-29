import React from 'react';
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Api from './Api';


function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            <Route path='/Api' element={<Api/>}/>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
