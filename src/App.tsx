import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../navigation/Home";
import Products from "../navigation/Products";
import Orders from "../navigation/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../navigation/SignUp";
import Categories from "../navigation/Categories";
import Profile from "../navigation/Profile";
import Login from "../navigation/Login";
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content d-flex">
          <div className="main-content flex-grow-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<Signup />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
