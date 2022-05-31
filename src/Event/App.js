import React from 'react';
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import UseContext from './UseContext';
import Event from './Event';
import Event2 from './Event2';
import EventObject from './EventObject';


function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            {/* <Route path='/usecontext' element={<UseContext/>}  /> */}
            <Route path='/event' element={<Event/>}  />
            <Route path='/event2' element={<Event2/>}  />
            <Route path='/eventObject' element={<EventObject/>}  />
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
