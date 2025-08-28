import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ClassicPedas from "./components/varieties/ClassicPedas";
import DryFruitPedas from "./components/varieties/DryFruitPedas";
import FusionPedas from "./components/varieties/FusionPedas";
import SeasionalPedas from "./components/varieties/SeasionalPedas";
import HealthyPedas from "./components/varieties/HealthyPedas";
import FruitPedas from "./components/varieties/FruitPedas";
import ExoticPedas from "./components/varieties/ExoticPedas";
import Footer from "./components/Footer";
import Home from "../navigation/Home";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const handleGetPostsClick = (tab: string) => {
    setSelectedTab(tab);
  };
  const renderContent = () => {
    if (selectedTab === 'ClassicPedas') {
      return <ClassicPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'DryFruitPedas') {
      return <DryFruitPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'FusionPedas') {
      return <FusionPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'SeasionalPedas') {
      return <SeasionalPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'HealthyPedas') {
      return <HealthyPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'FruitPedas') {
      return <FruitPedas onGetPostsClick={handleGetPostsClick}/>;
    } else if (selectedTab === 'ExoticPedas') {
      return <ExoticPedas onGetPostsClick={handleGetPostsClick}/>;
    } else {
      return <Home />;
    }
  };

  return (
    <div className="app-container">
    <Header />
    <div className="content d-flex">
      <Categories selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="main-content flex-grow-1 p-3">
        {renderContent()}   {/* Yeh add karna hoga */}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
