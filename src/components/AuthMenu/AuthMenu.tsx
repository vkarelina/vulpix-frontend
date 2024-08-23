import { useState } from "react";

import { Box, Button } from "@mui/material";

import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";
import { DropdownListUser } from "../DropdownListUser";
import { useAppSelector } from "../../hooks/useAppSelector";

const AuthMenu = () => {
  const user = useAppSelector((state) => state.auth.userData);

  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleOpenModal = (modalType: string) => {
    setIsOpen(modalType);
  };

  const handleCloseModal = () => {
    setIsOpen(null);
  };

  return (
    <>
      {user ? (
        <DropdownListUser />
      ) : (
        <Box display={"flex"} gap={2}>
          <Button variant="secondary" onClick={() => handleOpenModal("signIn")}>
            Sign in
          </Button>
          <Button variant="primary" onClick={() => handleOpenModal("signUp")}>
            Sign up
          </Button>
        </Box>
      )}
      {isOpen === "signIn" && (
        <SignInModal
          handleClose={handleCloseModal}
          open={isOpen === "signIn"}
        />
      )}
      {isOpen === "signUp" && (
        <SignUpModal
          handleClose={handleCloseModal}
          open={isOpen === "signUp"}
        />
      )}
    </>
  );
};

export default AuthMenu;
