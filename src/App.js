import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Card from './State And Props/Card'


function App() {
  return (
    <React.Fragment>
     <Router>
       <Navbar/>
          <Routes>
            <Route path='/card' element={<Card />}></Route>
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
