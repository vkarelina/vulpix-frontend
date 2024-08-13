import { Box } from "@mui/material";

import Logo from "../../logo";

const Header = () => {
  return (
    <Box
      bgcolor={"#111227"}
      height={70}
      display={"flex"}
      alignItems={"center"}
      pl={2}
    >
      <Box display={"flex"}>
        <Logo />
        <Box color={"#dc5801d9"} fontSize={20} fontWeight={"600"} pl={1}>
          Vulpix
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
