import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "../navigation/Home";
import { useState } from "react";
import Products from "./components/Products";

function App() {
  const [selectedTab, _setSelectedTab] = useState("Home");
  const [selectedCategory, setSelectedCategory] = useState("Classic Pedas");
  const renderContent = () => {
    if (selectedTab === "Home") {
      return <Home />;
    } else {
      // baaki sab tabs Products ko load karenge
      return <Products selectedTab={selectedTab} />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content d-flex">
        <Categories selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}  />
        <div className="main-content flex-grow-1 p-3">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
