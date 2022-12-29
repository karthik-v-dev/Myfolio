import React from "react";
import { Routes, Route } from "react-router-dom";
import Navgation from "./navigation";
// import{Container}from 'semantic-ui-react';
import Home from "./components/Home/home";
import Mydesign from "./components/Mydesigns/mydesign";
import Contactme from "./components/ConttactMe/contactme";
import "./App.css";
const App = () => {
  return (
    <div className="container ">
      <div className="side_nav ">
        <Navgation />
      </div>
      <div className="side_body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mydesign" element={<Mydesign />} />
          <Route path="/contactme" element={<Contactme />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
