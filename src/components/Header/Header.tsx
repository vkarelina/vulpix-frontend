import { useEffect } from "react";

import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { wrapperHeaderStyle, wrapperLogoStyle } from "./HeaderStyle";
import { Logo } from "../Logo";
import { fetchWhoAmI } from "../../redux/actionsCreators/auth";
import { AuthMenu } from "../AuthMenu";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWhoAmI());
  }, []);

  return (
    <Box sx={wrapperHeaderStyle}>
      <Box display={"flex"}>
        <Logo />
        <Box sx={wrapperLogoStyle}>Vulpix</Box>
      </Box>
      <AuthMenu />
    </Box>
  );
};

export default Header;
