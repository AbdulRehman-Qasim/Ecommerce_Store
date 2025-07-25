import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        padding: '0.8rem 1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fw-bold fs-4 text-white"
          to="/"
        >
          🛍 Ecommerce Store
        </NavLink>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <ul className="navbar-nav m-auto text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white mx-2"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white mx-2"
                to="/product"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white mx-2"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white mx-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex flex-wrap justify-content-center">
            <NavLink
              to="/login"
              className="btn btn-light btn-sm rounded-pill mx-2 mb-2 shadow-sm"
            >
              <i className="fas fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-light btn-sm rounded-pill mx-2 mb-2 shadow-sm"
            >
              <i className="fas fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-light btn-sm rounded-pill mx-2 mb-2 shadow-sm"
            >
              <i className="fas fa-shopping-cart me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
