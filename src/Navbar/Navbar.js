import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
       <div className="nav-link">
          <p>logo</p>
          <div className="links">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <Link className='btn btn-outline w-25' to='/user/add'>Add</Link>
          
          </div>
       </div>
    </nav>
    
  );
}

export default Navbar;
