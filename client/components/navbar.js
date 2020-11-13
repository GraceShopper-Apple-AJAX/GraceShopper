import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/products">Browse Products</Link>
      <Link to="/home">About Us</Link>
      <Link to="/home">Contact</Link>
    </nav>
  </div>
)
export default Navbar
