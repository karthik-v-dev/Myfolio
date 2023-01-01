import React from "react";
import { Routes, Route } from "react-router-dom";
import Navgation from "./navigation";
// import{Container}from 'semantic-ui-react';
import Home from "./components/Home/home";
import Mydesign from "./components/Mydesigns/mydesign";
import Contactme from "./components/ConttactMe/contactme";
import SideStick from "./components/sidestickers";
import Colorpicker  from "./components/colorpicker";
import "./App.css";
import Footer from "./components/Footer/footer";
import Aboutme from "./components/About Me/aboutme";
const App = () => {
  return (
    <div  style={{width:'100%',height:'auto'}}>
      <div className="pickerHead">
      {window.innerWidth >=756&&<Colorpicker /> }
      </div>
    <div className="containerhead">
      <div className="side_nav ">
        <Navgation />
        <div className="socialSticker">
        <SideStick/>
        </div>
        
      </div>
      <div className="side_body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Mydesign />} />
          <Route path="/contactme" element={<Contactme />} />
        </Routes>
      </div>
     
    </div>
     <div className="footer">
      <Footer/>
      </div>
    </div>
  );
};
export default App;
