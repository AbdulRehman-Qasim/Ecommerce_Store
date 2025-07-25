import React from 'react';
import './register.css'; // make sure path is correct
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="register-page">
        <div className="register-container">
          <h2 className="register-title">Create Account</h2>
          <p className="register-subtitle">Please fill the form to register</p>
          <hr className="register-divider" />
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="register-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="register-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="register-input"
              />
            </div>
            <p className="mt-3">
              Already have an account?{' '}
              <Link to="/login" className="register-link">
                Login
              </Link>
            </p>
            <div className="form-button">
              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
