import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/Login");
  };

  return (
    <>
      <header
        className="p-3 text-bg-dark header shadow-sm"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Logo and Brand Section */}
            <div className="d-flex align-items-center">
              <NavLink
                to="/"
                className="d-flex align-items-center text-decoration-none me-4"
                style={{ transition: "transform 0.2s ease" }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "scale(1)";
                }}
              >
                <img
                  src={logo}
                  alt="Pedhe Wala Logo"
                  className="me-3"
                  style={{
                    marginLeft: "-40px",
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
                <div className="d-flex flex-column">
                  <h1
                    className="mb-0 fw-bold"
                    style={{
                      fontSize: "1.8rem",
                      color: "#FFC107",
                      fontWeight: "700",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      letterSpacing: "1px",
                      marginLeft: "-35px",
                      lineHeight: "1.2",
                    }}
                  >
                    Pedhe Wala
                  </h1>
                  <small
                    className="text-light opacity-75"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      marginLeft: "-35px",
                      marginTop: "-2px",
                    }}
                  >
                    Your Learning Partner
                  </small>
                </div>
              </NavLink>
            </div>

            {/* Navigation Menu */}
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 flex-grow-1 gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded d-flex flex-column align-items-center text-center ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
                  }
                  style={{ transition: "all 0.3s ease", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (
                      !target.closest("a")?.classList.contains("active")
                    ) {
                      target.style.backgroundColor =
                        "rgba(255, 193, 7, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "transparent";
                  }}
                >
                  <i className="bi bi-house fs-5"></i>
                  <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    Home
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Categories"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded d-flex flex-column align-items-center text-center ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
                  }
                  style={{ transition: "all 0.3s ease", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (
                      !target.closest("a")?.classList.contains("active")
                    ) {
                      target.style.backgroundColor =
                        "rgba(255, 193, 7, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "transparent";
                  }}
                >
                  <i className="bi bi-speedometer2 fs-5"></i>
                  <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    Categories
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link px-3 py-2 rounded d-flex flex-column align-items-center text-center text-white"
                  style={{
                    transition: "all 0.3s ease",
                    borderRadius: "8px",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    if (!token) {
                      alert("Please login to access orders");
                      navigate("/Login");
                      return;
                    }
                    navigate("/Orders");
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "rgba(255, 193, 7, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "transparent";
                  }}
                >
                  <i className="bi bi-table fs-5"></i>
                  <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    Orders
                  </span>
                </button>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Products"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded d-flex flex-column align-items-center text-center ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
                  }
                  style={{ transition: "all 0.3s ease", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (
                      !target.closest("a")?.classList.contains("active")
                    ) {
                      target.style.backgroundColor =
                        "rgba(255, 193, 7, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "transparent";
                  }}
                >
                  <i className="bi bi-grid fs-5"></i>
                  <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    Products
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link px-3 py-2 rounded d-flex flex-column align-items-center text-center text-white"
                  style={{
                    transition: "all 0.3s ease",
                    borderRadius: "8px",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    if (!token) {
                      alert("Please login to access profile");
                      navigate("/Login");
                      return;
                    }
                    navigate("/Profile");
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "rgba(255, 193, 7, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = "transparent";
                  }}
                >
                  <i className="bi bi-person-circle fs-5"></i>
                  <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    Profile
                  </span>
                </button>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="d-flex align-items-center">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
                style={{ minWidth: "250px" }}
              >
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search books, courses..."
                    aria-label="Search"
                    style={{
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      border: "2px solid #FFC107",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "#333",
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

              {/* Action Buttons */}
              <div className="text-end">
                {!token ? (
                  <div className="d-flex gap-2">
                    <NavLink to="/Login">
                      <button
                        type="button"
                        className="btn btn-outline-light px-3"
                        style={{
                          borderRadius: "25px",
                          transition: "all 0.3s ease",
                          borderColor: "#FFC107",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = "#FFC107";
                          target.style.color = "#1a1a1a";
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = "transparent";
                          target.style.color = "#fff";
                        }}
                      >
                        Login
                      </button>
                    </NavLink>
                    <NavLink to="/SignUp">
                      <button
                        type="button"
                        className="btn px-3"
                        style={{
                          borderRadius: "25px",
                          backgroundColor: "#FFC107",
                          color: "#1a1a1a",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.transform = "translateY(-2px)";
                          target.style.boxShadow =
                            "0 4px 12px rgba(255, 193, 7, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.transform = "translateY(0)";
                          target.style.boxShadow = "none";
                        }}
                      >
                        Sign Up
                      </button>
                    </NavLink>
                  </div>
                ) : (
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "25px",
                        fontWeight: "600",
                      }}
                    >
                      <i className="bi bi-person-circle me-2"></i>
                      {userName || "User"}
                    </button>
                    <ul className="dropdown-menu">
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
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          <i className="bi bi-box-arrow-right me-2"></i>
                          Logout
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
    </>
  );
};

export default Header;
