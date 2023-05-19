import React from "react";
import "./Login.scss";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-container">
      <div className="login">
        <div className="left">
          <img src="../img/bread.jpg" alt="" />
        </div>
        <div className="right">
          <h2>Witaj, ponownie na Herkis</h2>

          <div className="form-container">
            <TextField
              sx={{ m: 1, width: "25ch" }}
              id="email"
              label="E-mail"
              variant="outlined"
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Hasło
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Hasło"
              />
            </FormControl>
            <Button variant="contained" className="btn-login">
              Zaloguj się
            </Button>
          </div>
          <div className="register-container">
            <p>Nie masz jeszcze konta?</p>
            <Button variant="text">Załóż Konto</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
