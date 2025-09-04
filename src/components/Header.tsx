// // Header.jsx
// // import styles from './Header.module.css';
// import logo from "../assets/logo.jpg";
// const Header = () => {
//   return (
//     <div className="p-3 text-bg-dark border-bottom fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//           {/* Logo / Brand */}
//           <a
//             href="/"
//             className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
//           >
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ height: "90px", width: "auto", objectFit: "contain" }}
//             />
//           </a>
//           {/* Navigation */}
//           <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             <li>
//               <a href="#" className="nav-link text-secondary">
//                 <i className="bi bi-house d-block mx-auto mb-1 fs-5 ms-2"></i>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link text-white">
//                 <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5 ms-4"></i>
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link text-white">
//                 <i className="bi bi-table d-block mx-auto mb-1 fs-5  ms-3"></i>
//                 Orders
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link text-white">
//                 <i className="bi bi-grid d-block mx-auto mb-1 fs-5  ms-3"></i>
//                 Products
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link text-white">
//                 <i className="bi bi-person-circle d-block mx-auto mb-1 fs-5 ms-2"></i>
//                 Login
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* Search Bar */}
//         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//           <input
//             type="search"
//             className="form-control form-control-dark text-bg-dark"
//             placeholder="Search..."
//             aria-label="Search"
//           />
//         </form>

//         {/* Login & Signup */}
//         <div className="text-end">
//           <button type="button" className="btn btn-outline-light me-2 d-flex align-items-center">
//             <i className="bi bi-person-circle me-2 fs-5"></i> Login
//           </button>
//           <button type="button" className="btn btn-warning d-flex align-items-center">
//             <i className="bi bi-box-arrow-in-right me-2 fs-5"></i> Sign-up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// // Header.jsx
// import logo from "../assets/logo.jpg";

// const Header = () => {
//   return (
//     <header className="p-3 text-bg-dark border-bottom fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
//           {/* Logo */}
//           <a
//             href="/"
//             className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//           >
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ height: "50px", width: "auto", objectFit: "contain" }}
//             />
//           </a>

//           {/* Navigation Links with Icons */}
//           <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             <li>
//               <a href="#" className="nav-link px-2 text-secondary d-flex align-items-center">
//                 <i className="bi bi-house me-2 fs-5"></i>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white d-flex align-items-center">
//                 <i className="bi bi-speedometer2 me-2 fs-5"></i>
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white d-flex align-items-center">
//                 <i className="bi bi-currency-dollar me-2 fs-5"></i>
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white d-flex align-items-center">
//                 <i className="bi bi-question-circle me-2 fs-5"></i>
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white d-flex align-items-center">
//                 <i className="bi bi-info-circle me-2 fs-5"></i>
//                 About
//               </a>
//             </li>
//           </ul>

//           {/* Search Bar */}
//           <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//             <input
//               type="search"
//               className="form-control form-control-dark text-bg-dark"
//               placeholder="Search..."
//               aria-label="Search"
//             />
//           </form>

//           {/* Login & Signup */}
//           <div className="text-end">
//             <button type="button" className="btn btn-outline-light me-2 d-flex align-items-center">
//               <i className="bi bi-person-circle me-2 fs-5"></i> Login
//             </button>
//             <button type="button" className="btn btn-warning d-flex align-items-center">
//               <i className="bi bi-box-arrow-in-right me-2 fs-5"></i> Sign-up
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
           {/* Logo / Brand */}
           <a
             href="/"
             className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
           >
             <img
               src={logo}
               alt="Logo"
               style={{ height: "90px", width: "auto", objectFit: "contain" }}
             />
           </a>

           {/* Navigation */}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link text-secondary">
                <i className="bi bi-house d-block mx-auto mb-1 fs-5 ms-2"></i>
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="nav-link text-white">
                <i className="bi bi-speedometer2 d-block mx-auto mb-1 fs-5 ms-4"></i>
                Categories
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
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
