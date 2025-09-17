// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// const Header = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token"); // ✅ check user login
//   const userName = localStorage.getItem("userName"); // optional, login ke time save karna

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     navigate("/Login");
//   };

//   return (
//     <header className="p-3 text-bg-dark header shadow-sm">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-between">
//           {/* ✅ Logo / Brand */}
//           <NavLink
//             to="/"
//             className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//           >
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ height: "70px", width: "auto", objectFit: "contain" }}
//             />
//           </NavLink>

//           {/* ✅ Navigation */}
//           <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `nav-link px-3 ${isActive ? "text-warning fw-bold" : "text-white"}`
//                 }
//               >
//                 <i className="bi bi-house d-block mx-auto mb-1 fs-5"></i>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Categories"
//                 className={({ isActive }) =>
//                   `nav-link px-3 ${isActive ? "text-warning fw-bold" : "text-white"}`
//                 }
//               >
//                 <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5"></i>
//                 Categories
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Orders"
//                 className={({ isActive }) =>
//                   `nav-link px-3 ${isActive ? "text-warning fw-bold" : "text-white"}`
//                 }
//               >
//                 <i className="bi bi-table d-block mx-auto mb-1 fs-5"></i>
//                 Orders
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Products"
//                 className={({ isActive }) =>
//                   `nav-link px-3 ${isActive ? "text-warning fw-bold" : "text-white"}`
//                 }
//               >
//                 <i className="bi bi-grid d-block mx-auto mb-1 fs-5"></i>
//                 Products
//               </NavLink>
//             </li>
//             {token && (
//               <li>
//                 <NavLink
//                   to="/Profile"
//                   className={({ isActive }) =>
//                     `nav-link px-3 ${isActive ? "text-warning fw-bold" : "text-white"}`
//                   }
//                 >
//                   <i className="bi bi-person-circle d-block mx-auto mb-1 fs-5"></i>
//                   Profile
//                 </NavLink>
//               </li>
//             )}
//           </ul>

//           {/* ✅ Search Bar */}
//           <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//             <input
//               type="search"
//               className="form-control form-control-dark"
//               placeholder="Search..."
//               aria-label="Search"
//             />
//           </form>

//           {/* ✅ Buttons */}
//           <div className="text-end">
//             {!token ? (
//               <>
//                 <NavLink to="/Login">
//                   <button type="button" className="btn btn-primary px-3 me-2">
//                     Login
//                   </button>
//                 </NavLink>
//                 <NavLink to="/SignUp">
//                   <button type="button" className="btn btn-warning">
//                     Sign Up
//                   </button>
//                 </NavLink>
//               </>
//             ) : (
//               <>
//                 <span className="text-white me-3">
//                   Hi, {userName || "User"} 👋
//                 </span>
//                 <button
//                   onClick={handleLogout}
//                   type="button"
//                   className="btn btn-danger px-3"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ✅ check user login
  const userName = localStorage.getItem("userName"); // optional, login ke time save karna

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/Login");
  };
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
                    `nav-link ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
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
                    `nav-link ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
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
                    `nav-link ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
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
                    `nav-link ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
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
                    `nav-link ${
                      isActive ? "text-warning fw-bold" : "text-white"
                    }`
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
            {!token ? (
              <>
                <NavLink to="/Login">
                  <button type="button" className="btn btn-primary px-3 me-2">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/SignUp">
                  <button type="button" className="btn btn-warning">
                    Sign Up
                  </button>
                </NavLink>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn-danger px-3"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
