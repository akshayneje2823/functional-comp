import React from 'react'
import {Link}  from 'react-router-dom'


function Navbar() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/home" className='navbar-brand'>React All</Link>
        <div className="mr-auto">
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to="/event" className='nav-link '>Event</Link></li>
            <li className='nav-item'><Link to="/event2" className='nav-link '>Event2</Link></li>
            <li className='nav-item'><Link to="/eventObject" className='nav-link '>EventObject</Link></li>
            {/* <li className='nav-item'><Link to="/usecontext" className='nav-link '>UseContext</Link></li> */}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
