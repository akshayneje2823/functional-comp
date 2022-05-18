import React from 'react'
import {Link}  from 'react-router-dom'


function Navbar() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/home" className='navbar-brand'>React All</Link>
        <div className="mr-auto">
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to="/card" className='nav-link '>Card</Link></li>
            <li className='nav-item'><Link to="/example1" className='nav-link '>Example1</Link></li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
