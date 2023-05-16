import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import useStore from "@/src/zustand";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("sid@gmail.com");
  const [password, setPassword] = useState<string>("password");
  const loginUser = useStore((state) => state.login);

  const handleOnLogin = async () => {
    await loginUser({ email, password });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 1,
        minHeight: "100vh",
      }}
    >
      <Typography variant="h5" sx={{ mx: "auto" }}>
        LOGIN
      </Typography>
      <TextField
        label={"Email"}
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        fullWidth
      />
      <TextField
        label={"Password"}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        fullWidth
      />
      <CustomButton label={"LOGIN"} onClick={handleOnLogin} />
    </Box>
  );
};
export default LoginForm;
