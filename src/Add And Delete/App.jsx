import React from 'react';
import Navbar from './components/Layout/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import User from './components/pages/User';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<User />} />
                <Route path='/contact' element={<Contact />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App