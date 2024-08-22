import { FC, useState } from "react";

import { Box, Button } from "@mui/material";

import { UserData } from "../../redux/types/authType";
import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";
import { DropdownListUser } from "../DropdownListUser";

interface AuthMenuProps {
  user?: UserData | null;
}

const AuthMenu: FC<AuthMenuProps> = ({ user }) => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleCloseSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };

  const handleCloseSignUp = () => {
    setIsOpenSignUp(!isOpenSignUp);
  };

  return (
    <>
      {user ? (
        <DropdownListUser />
      ) : (
        <Box display={"flex"} gap={2}>
          <Button variant="secondary" onClick={handleCloseSignIn}>
            Sign in
          </Button>
          <Button variant="primary" onClick={handleCloseSignUp}>
            Sign up
          </Button>
        </Box>
      )}
      {isOpenSignIn && (
        <SignInModal handleClose={handleCloseSignIn} open={isOpenSignIn} />
      )}
      {isOpenSignUp && (
        <SignUpModal handleClose={handleCloseSignUp} open={isOpenSignUp} />
      )}
    </>
  );
};

export default AuthMenu;
