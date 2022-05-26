import React from 'react';
import Navbar from './Navbar';
import FetchApi from './fetchApi';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            <Route path='/FetchApi' element={<FetchApi />}></Route>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
