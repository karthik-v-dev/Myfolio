import React from "react";
import { Menu} from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Colorpicker  from "./components/colorpicker";
import Login from "./components/login";
import Signup from "./components/signup";


function Navgation() {
  const [active, setActive] = useState({ activeItem: "Home" });
  const login = false;
//   const login = true;

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });
  //  const loginClick=()=>{
  // //   <Login/>
  //  }
  //  const signupClick=()=>{
  // //   <Signup/>
  //  }

  const { activeItem } = active;
  //  const path1= '/'+{...activeItem}+'/'+login
  // console.log(path1)
  return (
    <div>
     <Colorpicker /> 

      {login?<Menu className="my_border" secondary vertical> <Menu.Item><img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'alt='user'/> <span>Karthik</span></Menu.Item></Menu>
      :<Menu className="my_border" secondary vertical>
        <Menu.Item>
          <Signup />
        </Menu.Item>

        <Menu.Item>
          <Login />
        </Menu.Item>
      </Menu>
}
      <Menu pointing secondary vertical className="mt-0">
        <Link to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/mydesign">
          <Menu.Item
            name="Mydesigns"
            active={activeItem === "Mydesigns"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/contactme">
          {" "}
          <Menu.Item
            name="Contact Me"
            active={activeItem === "Contact Me"}
            onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </div>
  );
}
export default Navgation;
