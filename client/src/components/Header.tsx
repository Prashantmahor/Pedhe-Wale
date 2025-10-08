import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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
      <header className="bg-black shadow-md header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* Logo / Brand */}
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
            >
              <div className="flex items-center justify-around">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-[100px] w-auto object-contain"
                />
                <h1
                  className="font-serif text-5xl  mt-2"
                  style={{ color: "#FFC107", fontWeight: "bold" }}
                >
                  Pedhe Wala
                </h1>
              </div>
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
                style={{
                  borderRadius: "25px",
                  color: "#333",
                  border: "none",
                }}
              />
            </form>

            {/* Buttons */}
            <div className="text-end">
              {!token ? (
                <>
                  <NavLink to="/Login">
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-3"
                      style={{
                        borderRadius: "25px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/SignUp">
                    <button
                      type="button"
                      className="btn btn-warning px-3"
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "#FFC107",
                        color: "#1a1a1a",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                      }}
                    >
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

// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Header = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const userName = localStorage.getItem("userName");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     navigate("/Login");
//   };

//   return (
//     <header className="bg-black shadow-md">
//       <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//         {/* Logo / Brand */}
//         <NavLink to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-[70px] w-auto object-contain"
//           />
//           <h1 className="font-serif text-4xl text-yellow-400 font-bold">
//             Pedhe Wala
//           </h1>
//         </NavLink>

//         {/* Navigation */}
//         <ul className="flex gap-6 items-center">
//           {[
//             { to: "/", label: "Home", icon: "bi-house" },
//             { to: "/Categories", label: "Categories", icon: "bi-speedometer2" },
//             { to: "/Orders", label: "Orders", icon: "bi-table" },
//             { to: "/Products", label: "Products", icon: "bi-grid" },
//             { to: "/Profile", label: "Profile", icon: "bi-person-circle" },
//           ].map((item) => (
//             <li key={item.to}>
//               <NavLink
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
//                     isActive
//                       ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(255,193,7,0.8)]"
//                       : "text-white hover:text-yellow-400 hover:bg-white/10"
//                   }`
//                 }
//               >
//                 <i className={`bi ${item.icon} fs-5`}></i>
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Search Bar */}
//         <form className="hidden md:block">
//           <input
//             type="search"
//             className="px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="Search..."
//           />
//         </form>

//         {/* Buttons */}
//         <div className="flex gap-3">
//           {!token ? (
//             <>
//               <NavLink to="/Login">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//                   Login
//                 </button>
//               </NavLink>
//               <NavLink to="/SignUp">
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
//                   Sign Up
//                 </button>
//               </NavLink>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
