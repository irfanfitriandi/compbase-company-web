import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import LogoIcon from "../Icons/LogoIcon";
import MenuIcon from "../Icons/MenuIcon";

const Navbar = () => {
  const items = [
    {
      label: (
        <a href="#services">
          <h1 className="font-medium p-1">Our Services</h1>
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="#clients">
          <h1 className="font-medium p-1">Our Clients</h1>
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={`/saved-clients`}>
          <h1 className="font-medium p-1">Saved Clients</h1>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <a href="#contact">
          <h1 className="font-medium p-1">Contact Us</h1>
        </a>
      ),
      key: "3",
    },
  ];

  const path = window.location.pathname;

  return (
    <nav className="flex justify-between items-center absolute top-0 h-24 w-full text-gray-100 px-4 md:px-8">
      <Link to={`/`}>
        <LogoIcon
          primary={path === "/" ? "#FFFFFF" : "#FF1F57"}
          secondary={path === "/" ? "#B6B6B6" : "#CC1946"}
          className="w-48 md:w-56"
        />
      </Link>
      <div>
        {path === "/" && (
          <Dropdown menu={{ items }} trigger={["click"]}>
            <MenuIcon
              primary="#FFFFFF"
              className="w-10 md:w-12 cursor-pointer"
            />
          </Dropdown>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
