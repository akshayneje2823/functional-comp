import React from 'react';
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import UseContext from './UseContext';

function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            {/* <Route path='/usecontext' element={<UseContext/>}  /> */}
           <h1>
             Hello
           </h1>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
