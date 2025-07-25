import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "./Login.css"; // ✅ Make sure this path matches your folder structure

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Welcome Back 👋</h1>
          <p className="login-subtitle">Login to your account to continue</p>
          <hr className="login-divider" />

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control login-input"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control login-input"
                placeholder="••••••••"
              />
            </div>

            <div className="form-extra">
              <p>
                New here?{" "}
                <Link to="/register" className="login-link">
                  Register
                </Link>
              </p>
            </div>

            <div className="form-button">
              <button className="btn login-btn" type="submit" >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
