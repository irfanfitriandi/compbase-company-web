import { Dropdown } from "antd";
import LogoWhiteIcon from "../Icons/LogoWhiteIcon";
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
        <a href="#contact">
          <h1 className="font-medium p-1">Bookmark</h1>
        </a>
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

  return (
    <nav className="flex justify-between items-center absolute top-0 h-24 w-full text-gray-100 px-4 md:px-8">
      <LogoWhiteIcon className="w-48 md:w-56" />
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <MenuIcon className="w-10 md:w-12 cursor-pointer" />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
