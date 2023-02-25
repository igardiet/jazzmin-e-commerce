import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/jazzmin-logo.png'
import cartLogo from '../../assets/images/cart-logo.png'
import searchLogo from '../../assets/images/search-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiar navbarStyle">
  <div className="container-fluid">
    <NavLink to='/'><img src={Logo} alt="Jazzmin logo" className='logo' /></NavLink>
    <form className="d-flex" role="search">
    <NavLink to='/checkout'><img src={cartLogo} alt="Cart logo" className='cartLogo' /></NavLink>
      <Link to='/'><input className="searchBar me-2" type="search" placeholder="Search" aria-label="Search" /></Link>
      <Link to='/'><img src={searchLogo} alt="Search logo" className='searchLogo' /></Link>
    </form>
  </div>
</nav>
  )
}

export default Navbar