import React from 'react'
import './Sidebar.css'
import SidebarRow from './../SidebarRow/SidebarRow'
import LocalHospital from "@material-ui/icons/LocalHospital";
import EmojiFlags from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorageSharp from "@material-ui/icons/Storefront";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
        title="Tran Hieu"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Infomation" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messager" />
      <SidebarRow Icon={StorageSharp} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
    </div>
  );
}

export default Sidebar
