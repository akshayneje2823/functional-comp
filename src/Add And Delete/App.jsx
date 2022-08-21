import React from 'react';
import Navbar from './components/Layout/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import User from './components/pages/User';
import AddUser from './components/users/AddUser';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<User />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/users/add'  element={<AddUser />} />
                <Route exact element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App