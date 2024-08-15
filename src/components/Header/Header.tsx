import { Box } from "@mui/material";

import { wrapperHeaderStyle, wrapperLogoStyle } from "./HeaderStyle";
import { Logo } from "../Logo";

const Header = () => (
  <Box sx={wrapperHeaderStyle}>
    <Box display={"flex"}>
      <Logo />
      <Box sx={wrapperLogoStyle}>Vulpix</Box>
    </Box>
  </Box>
);

export default Header;
