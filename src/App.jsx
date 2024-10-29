import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Loginpopup from "./components/Loginpopup/Loginpopup";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
