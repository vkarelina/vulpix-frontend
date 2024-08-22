import { useEffect } from "react";

import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { wrapperHeaderStyle, wrapperLogoStyle } from "./HeaderStyle";
import { Logo } from "../Logo";
import { fetchWhoAmI } from "../../redux/actionsCreators/actionsCreatorsAuth";
import { AuthMenu } from "../AuthMenu";
import { useAppSelector } from "../../hooks/useAppSelector";

const Header = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(fetchWhoAmI());
  }, []);

  return (
    <Box sx={wrapperHeaderStyle}>
      <Box display={"flex"}>
        <Logo />
        <Box sx={wrapperLogoStyle}>Vulpix</Box>
      </Box>
      <AuthMenu user={user} />
    </Box>
  );
};

export default Header;
