import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/Login");
  };

  return (
    <header
      className="p-3 text-bg-dark shadow-sm"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <NavLink
              to="/"
              className="d-flex align-items-center text-decoration-none"
            >
              <img
                src={logo}
                alt="Pedhe Wala Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  borderRadius: "8px",
                }}
              />
              <div className="d-none d-sm-block ms-2">
                <h1
                  className="mb-0 fw-bold"
                  style={{
                    fontSize: "1.8rem",
                    color: "#FFC107",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Pedhe Wala
                </h1>
                <small
                  className="text-light opacity-75"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    marginTop: "-2px",
                  }}
                >
                  Your Learning Partner
                </small>
              </div>
            </NavLink>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="btn d-lg-none text-white fs-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              menuOpen ? "d-flex" : "d-none"
            } flex-column flex-lg-row align-items-lg-center justify-content-lg-center gap-3 w-100 mt-3 mt-lg-0 text-center text-lg-start bg-dark bg-lg-transparent p-3 p-lg-0 position-absolute position-lg-static top-100 start-0 z-3`}
            style={{ borderRadius: "8px" }}
          >
            <ul className="nav flex-column flex-lg-row mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white px-3 py-2">
                  <i className="bi bi-house d-block mx-auto mb-1 fs-5"></i>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Categories" className="nav-link text-white px-3 py-2">
                  <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5"></i>
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white px-3 py-2 bg-transparent border-0"
                  onClick={() => {
                    if (!token) {
                      alert("Please login to access orders");
                      navigate("/Login");
                      return;
                    }
                    navigate("/Orders");
                  }}
                >
                  <i className="bi bi-table d-block mx-auto mb-1 fs-5"></i>
                  Orders
                </button>
              </li>
              <li className="nav-item">
                <NavLink to="/Products" className="nav-link text-white px-3 py-2">
                  <i className="bi bi-grid d-block mx-auto mb-1 fs-5"></i>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white px-3 py-2 bg-transparent border-0"
                  onClick={() => {
                    if (!token) {
                      alert("Please login to access profile");
                      navigate("/Login");
                      return;
                    }
                    navigate("/Profile");
                  }}
                >
                  <i className="bi bi-person-circle d-block mx-auto mb-1 fs-5"></i>
                  Profile
                </button>
              </li>
            </ul>

            {/* Search Bar */}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 mx-auto"
              role="search"
              style={{ maxWidth: "300px" }}
            >
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search books, courses..."
                  aria-label="Search"
                  style={{
                    borderRadius: "25px",
                    border: "2px solid #FFC107",
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#FFC107",
                    border: "2px solid #FFC107",
                    borderRadius: "0 25px 25px 0",
                    color: "#1a1a1a",
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* Auth Buttons */}
            <div className="mt-3 mt-lg-0 text-center text-lg-start">
              {!token ? (
                <div className="d-flex flex-column flex-lg-row gap-2">
                  <NavLink to="/Login">
                    <button className="btn btn-outline-light px-4 w-100">
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/SignUp">
                    <button className="btn btn-warning px-4 w-100">Sign Up</button>
                  </NavLink>
                </div>
              ) : (
                <div className="dropdown w-100">
                  <button
                    className="btn btn-warning dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-2"></i>
                    {userName || "User"}
                  </button>
                  <ul className="dropdown-menu w-100 text-center">
                    <li>
                      <NavLink className="dropdown-item" to="/Profile">
                        <i className="bi bi-person me-2"></i>Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Orders">
                        <i className="bi bi-table me-2"></i>Orders
                      </NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
