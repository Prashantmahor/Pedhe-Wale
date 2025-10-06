import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] w-auto object-contain"
          />
          <h1 className="font-serif text-3xl text-yellow-400 font-bold">
            Pedhe Wala
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {[
            { to: "/", label: "Home", icon: "bi-house" },
            { to: "/Categories", label: "Categories", icon: "bi-speedometer2" },
            { to: "/Orders", label: "Orders", icon: "bi-table" },
            { to: "/Products", label: "Products", icon: "bi-grid" },
            { to: "/Profile", label: "Profile", icon: "bi-person-circle" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(255,193,7,0.8)]"
                      : "text-white hover:text-yellow-400 hover:bg-white/10"
                  }`
                }
              >
                <i className={`bi ${item.icon} fs-5`}></i>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          {!token ? (
            <>
              <NavLink to="/Login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Login
                </button>
              </NavLink>
              <NavLink to="/SignUp">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                  Sign Up
                </button>
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      {/* Slide-Out Menu (Mobile) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900 text-white p-6 z-50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">
                  Menu
                </h2>
                <button
                  className="text-3xl"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>

              {/* Search */}
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* Nav Links */}
              <ul className="space-y-4">
                {[
                  { to: "/", label: "Home", icon: "bi-house" },
                  { to: "/Categories", label: "Categories", icon: "bi-speedometer2" },
                  { to: "/Orders", label: "Orders", icon: "bi-table" },
                  { to: "/Products", label: "Products", icon: "bi-grid" },
                  { to: "/Profile", label: "Profile", icon: "bi-person-circle" },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className="flex items-center gap-3 text-lg hover:text-yellow-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className={`bi ${item.icon} text-2xl`}></i>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Auth Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                {!token ? (
                  <>
                    <NavLink to="/Login" onClick={() => setMenuOpen(false)}>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                        Login
                      </button>
                    </NavLink>
                    <NavLink to="/SignUp" onClick={() => setMenuOpen(false)}>
                      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                        Sign Up
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
