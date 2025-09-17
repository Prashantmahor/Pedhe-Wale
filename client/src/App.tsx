import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./navigation/Home";
import Products from "./navigation/Products";
import Orders from "./navigation/Orders";
import { Routes, Route } from "react-router-dom"; 
import Signup from "./navigation/SignUp";
import Categories from "./navigation/Categories";
import Profile from "./navigation/Profile";
import Login from "./navigation/Login";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content d-flex">
        <div className="main-content flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
