import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Create from './components/Create';
import Details from './components/Details';
import List from './components/List';
import Update from './components/Update';

function App() {
    return (
        <div className='App'>
            <h1>Resturanst List</h1>
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/list'>List</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/update'>Update</Link></li>
                    <li><Link to='/details'>Details</Link></li>
                </ul>
            </Router>

            <Route path='list'><List/></Route>
            <Create />
            <Update />
            <Details />
        </div>
    )
}

export default App