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

import { fetchRegistration } from "../../redux/actionsCreators/actionsCreatorsAuth";

interface SignUpModalProps {
  handleClose: () => void;
  open: boolean;
}

type SignUpDataType = {
  login: string;
  email: string;
  password: string;
};

const SignUpModal: FC<SignUpModalProps> = ({ handleClose, open }) => {
  const dispatch = useDispatch();

  const signUpData = useRef<SignUpDataType>({
    login: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchRegistration(signUpData.current));
    handleClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.id in signUpData.current) {
      signUpData.current[e.target.id as keyof SignUpDataType] = e.target.value;
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ width: 350, p: 4, bgcolor: "#111227" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#dc5801d9" }} />
          <Typography component="h1" variant="h5" color="white">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              onChange={(e) => (signUpData.current.password = e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default SignUpModal;
