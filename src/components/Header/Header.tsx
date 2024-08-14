import { Box } from "@mui/material";

import Logo from "../Logo/Logo";

import { wrapperHeaderStyle, wrapperLogoStyle } from "./HeaderStyle";

const Header = () => (
  <Box {...wrapperHeaderStyle}>
    <Box display={"flex"}>
      <Logo />
      <Box {...wrapperLogoStyle}>Vulpix</Box>
    </Box>
  </Box>
);

export default Header;
