import "../navbar/navbar.scss";
import { BiLogoDigg, BiSearch } from "react-icons/bi";
import { MdWidgets, MdOutlineSettings } from "react-icons/md";
import { IoMdQrScanner, IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <BiLogoDigg />
        <span>logo</span>
      </div>
      <div className="icons">
        <BiSearch />
        <MdWidgets />
        <IoMdQrScanner />

        <div className="notification">
          <IoMdNotificationsOutline />
          <span className="count">1</span>
        </div>
        <div className="user">
          <CgProfile className="img" />
          <span>kesav</span>
        </div>
        <MdOutlineSettings />
      </div>
    </div>
  );
};

export default Navbar;
