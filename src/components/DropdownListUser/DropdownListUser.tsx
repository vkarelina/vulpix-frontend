import { useState } from "react";

import { IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";

import { fetchWhoAmI } from "../../redux/actionsCreators/actionsCreatorsAuth";

const DropdownListUser = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(fetchWhoAmI());
    handleClose();
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar alt="Vika" src="/path-to-avatar.jpg" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default DropdownListUser;
