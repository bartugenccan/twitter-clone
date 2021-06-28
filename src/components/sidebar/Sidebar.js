import React from "react";
//CSS
import "./Sidebar.css";

//Component Imports
import SidebarRow from "../sidebarRow/SidebarRow";

//Material UI
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar-icon" />
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={SearchIcon} />
      <SidebarRow title="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarRow title="Messages" Icon={MailOutlineIcon} />
      <SidebarRow title="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarRow title="Lists" Icon={ListAltIcon} />
      <SidebarRow title="Profile" Icon={PermIdentityIcon} />
      <SidebarRow title="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
