import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import UpdateIcon from "@material-ui/icons/Update";
import StorageIcon from "@material-ui/icons/Storage";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SettingsIcon from "@material-ui/icons/Settings";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <IconButton>
        <ClearAllIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <HomeIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <PersonIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <InsertDriveFileIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <UpdateIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <StorageIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <DateRangeIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <SettingsIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default Sidebar;
