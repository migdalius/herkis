import React from "react";
import "./SideBar.scss";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const SideBar = () => {
  const Bakery = true;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar-admin">
      <h3>Moje Konto</h3>
      {!Bakery && (
        <>
          <p>Moje Rezerwacje</p>
          <p>Moje Zakupy</p>
          <p>Ustawienia Konta</p>
        </>
      )}
      {Bakery && (
        <>
          <p>Zamówienia</p>
          <p>Produkty</p>
          <p>Moje Dane</p>
          <p>Ustawienia</p>
        </>
      )}
      <p>Wyloguj</p>
    </div>
  );
};

export default SideBar;
