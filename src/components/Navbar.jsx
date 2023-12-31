import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger  bg-body-tertiary fw-bolder">
    <div className="container-fluid">
      {/* <NavLink className="navbar-brand text-info" to="/ ">
        Spaghetti World
      </NavLink> */}
      <button
        className="navbar-toggler bg-info"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link active text-warning" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success" to="/new-product">
              New Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" to="/product-list">
             Product List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/loginform">
            Login
            </NavLink>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar