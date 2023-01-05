import React from "react";
import {Link} from "react-router-dom";
// import { Menu,Button,Icon } from 'semantic-ui-react'
// import { useState } from 'react'
// import Login from './components/login'
// import Signup from './components/signup'

function Home() {
  return (
    <div>
      <div className="F-home ui sizer F">
        <h1 className="ui huge header">HEY, I'M KARTHIK VOORUGONDA</h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Link to="/projects"><button className="ui yellow button">PROJECTS</button></Link>
      </div>
    </div>
  );
}
export default Home;
