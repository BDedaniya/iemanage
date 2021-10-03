import React from "react";
import "./Header.css";
import Logo from "../Image/logo.PNG";
import user_img from "../Image/user_icon.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo_img" src={Logo} alt="logo" />
      <div className="header_right_div">
        <label className="analytics_btn">Analytics</label>
        <img className="user_img" src={user_img} alt="user-icon"/>
      </div>
    </div>
  );
};
export default Header;
