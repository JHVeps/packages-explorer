import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PackageDetails from "../pages/PackageDetails";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:package_name" element={<PackageDetails />} />
      </Routes>
    </div>
  );
};

export default App;
