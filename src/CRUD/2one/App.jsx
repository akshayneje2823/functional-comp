import React from 'react'
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Create from './components/Create';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App