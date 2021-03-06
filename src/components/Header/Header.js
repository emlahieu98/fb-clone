import React from 'react'
import {  Avatar, IconButton } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlined from "@material-ui/icons/SubscriptionsOutlined";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForumIcon from "@material-ui/icons/Forum";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option-active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Hieu Tran</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
          
        <IconButton >
          <ForumIcon />
        </IconButton>
            
        <IconButton >
          <NotificationsActiveIcon />
        </IconButton>
        
        <IconButton >
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header
