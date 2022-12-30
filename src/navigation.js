import React from "react";
import { Menu} from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Colorpicker  from "./components/colorpicker";
import Login from "./components/login";
import Signup from "./components/signup";
import Myimg from './myimg.jpg'


function Navgation() {
  const [active, setActive] = useState({ activeItem: "HOME" });
  // const login = false;
  const login = true;

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
 
  return (
    <div>
     {window.innerWidth <755&&<Colorpicker /> }

      {login?<Menu className="my_border" secondary vertical> <Menu.Item><img class="ui avatar image" src={Myimg} alt="My_img"/>
<span className="text-weight">KARTHIK V</span></Menu.Item></Menu>
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
            name="HOME"
            active={activeItem === "HOME"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/aboutme">
          <Menu.Item
            name="ABOUT ME"
            active={activeItem === "ABOUT ME"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/projects">
          <Menu.Item
            name="PROJECTS"
            active={activeItem === "PROJECTS"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/contactme">
          {" "}
          <Menu.Item
            name="CONTACT ME"
            active={activeItem === "CONTACT ME"}
            onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </div>
  );
}
export default Navgation;
