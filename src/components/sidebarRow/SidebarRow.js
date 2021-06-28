import React from "react";

//CSS
import "./SidebarRow.css";

function SidebarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebarRow ${selected && "sidebarRow-selected"}`}>
      <Icon className="sidebarRow-icon" />
      <h2 className="sidebarRow-title"> {title} </h2>
    </div>
  );
}

export default SidebarRow;
