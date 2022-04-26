import React from "react";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import {
  Apps,
  CameraAltOutlined,
  Menu,
  Notifications,
  PersonAddOutlined,
  Search,
  VideoCall,
} from "@material-ui/icons";
import logo from "../../assets/logo1.png";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Menu className="header__menuicon" />
        <img className="header__logo" src={logo} alt="Youtube" />
      </div>

      <form className="header__center">
        <input className="header__input" placeholder="Search" />
        <Button className="header__btn">
          <Search className="header__searchIcon" />
        </Button>
      </form>

      <div className="header__right">
        <VideoCall />
        <Apps />
        <Notifications />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
