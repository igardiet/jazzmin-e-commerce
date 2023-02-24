import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/jazzminLogo.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to='/'><img src={Logo} alt="Jazzmin logo" className='logo' /></NavLink>
    <NavLink to='/checkout'>Cart</NavLink>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar