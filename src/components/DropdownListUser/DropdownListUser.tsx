import { useState } from "react";

import { IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";

import { fetchWhoAmI } from "../../redux/actionsCreators/auth";
import { useAppSelector } from "../../hooks/useAppSelector";

const DropdownListUser = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.userData);

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
        {user && (
          <Avatar alt={user.login} src={user.avatarPath || "avatar.jpg"} />
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default DropdownListUser;
