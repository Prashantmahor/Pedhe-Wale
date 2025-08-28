// Header.jsx
// import styles from './Header.module.css';
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <div className="px-3 py-2 text-bg-dark border-bottom iconMargin">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* Logo / Brand */}
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: "90px", width: "auto", objectFit: "contain" }}
            />
          </a>
          {/* Navigation */}
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <i className="bi bi-house d-block mx-auto mb-1 fs-5 ms-2"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5 ms-4"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-table d-block mx-auto mb-1 fs-5  ms-3"></i>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-grid d-block mx-auto mb-1 fs-5  ms-3"></i>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-person-circle d-block mx-auto mb-1 fs-5 ms-2"></i>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
