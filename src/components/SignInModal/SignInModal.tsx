import { FC, useRef } from "react";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";

import {
  fetchAccessToken,
  fetchWhoAmI,
} from "../../redux/actionsCreators/actionsCreatorsAuth";
import {
  AvatarStyle,
  boxInputStyle,
  buttonStyle,
  dialogStyle,
  dialogWrapperStyle,
} from "./SignInStyle";

interface SignInModalProps {
  handleClose: () => void;
  open: boolean;
}

type SignUpDataType = {
  email: string;
  password: string;
};

const SignInModal: FC<SignInModalProps> = ({ handleClose, open }) => {
  const dispatch = useDispatch();
  const signInData = useRef<SignUpDataType>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchAccessToken(signInData.current));
    dispatch(fetchWhoAmI());
    handleClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.id in signInData.current) {
      signInData.current[e.target.id as keyof SignUpDataType] = e.target.value;
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={dialogStyle}>
        <Box sx={dialogWrapperStyle}>
          <Avatar sx={AvatarStyle} />
          <Typography component="h1" variant="h5" color="white">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={boxInputStyle}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="primary" sx={buttonStyle}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default SignInModal;
