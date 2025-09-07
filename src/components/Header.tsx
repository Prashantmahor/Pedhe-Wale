import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* Logo / Brand */}
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "90px", width: "auto", objectFit: "contain" }}
              />
            </NavLink>

            {/* Navigation */}
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                  }
                >
                  <i className="bi bi-house d-block mx-auto mb-1 fs-5 ms-2"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Categories"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                  }
                >
                  <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5 ms-4"></i>
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Orders"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                  }
                >
                  <i className="bi bi-table d-block mx-auto mb-1 fs-5 ms-3"></i>
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                  }
                >
                  <i className="bi bi-grid d-block mx-auto mb-1 fs-5 ms-3"></i>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Profile"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                  }
                >
                  <i className="bi bi-person-circle d-block mx-auto mb-1 fs-5 ms-2"></i>
                  Profile
                </NavLink>
              </li>
            </ul>

            {/* Search Bar */}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Buttons */}
            <div className="text-end">
              <NavLink to="/Login">
                <button type="button" className="btn btn-primary  px-3 me-2">
                  Login
                </button>
              </NavLink>
              <NavLink to="/SignUp">
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
