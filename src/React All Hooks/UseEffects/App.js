import React from 'react';
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Api from './Api';
// import Api from './fetch API/Api';
// import USeEffcet from './USeEffect'



function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            {/* <Route path='/useEffect' element={<USeEffcet/>}/> */}
            <Route path='/api' element={<Api/>}/>
            
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
