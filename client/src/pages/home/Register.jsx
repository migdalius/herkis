import React from "react";
import "./Register.scss";
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
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="register-container">
      <div className="register">
        <div className="left">
          <img src="../img/bread.jpg" alt="" />
        </div>
        <div className="right">
          <div className="tabs">
            <ThemeProvider theme={theme}>
              <Box
                sx={{ width: "100%", typography: "body1", fontSize: "18px" }}
              >
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange}>
                      <Tab
                        sx={{ fontSize: "20px", px: 4 }}
                        label="Konto Zwykłe"
                        value="1"
                      />
                      <Tab
                        sx={{ fontSize: "20px", px: 4 }}
                        label="Konto Piekarni"
                        value="2"
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div className="form-container">
                      <TextField
                        sx={{ m: 1, width: "25ch" }}
                        id="email"
                        label="E-mail"
                        variant="outlined"
                      />
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="outlined"
                      >
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
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Hasło"
                        />
                      </FormControl>
                      <div className="agrement">
                        <Checkbox {...label} />
                        <div className="agrement-link">
                          <p>Oświadczam, że znam i akceptuję postanowienia </p>
                          <Link>Regulaminu Herkis.</Link>
                        </div>
                      </div>
                      <Button variant="contained" className="btn-login">
                        Załóż konto
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div className="form-container">
                      <TextField
                        sx={{ m: 1, width: "25ch" }}
                        id="email"
                        label="E-mail"
                        variant="outlined"
                      />
                      <TextField
                        sx={{ m: 1, width: "25ch" }}
                        id="email"
                        label="Nazwa piekarni"
                        variant="outlined"
                      />
                      <TextField
                        sx={{ m: 1, width: "25ch" }}
                        id="email"
                        label="NIP Piekarni"
                        variant="outlined"
                      />
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="outlined"
                      >
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
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Hasło"
                        />
                      </FormControl>
                      <div className="agrement">
                        <Checkbox {...label} />
                        <div className="agrement-link">
                          <p>Oświadczam, że znam i akceptuję postanowienia </p>
                          <Link>Regulaminu Herkis.</Link>
                        </div>
                      </div>
                      <Button variant="contained" className="btn-login">
                        Załóż konto
                      </Button>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </ThemeProvider>
          </div>
          <div className="register-container">
            <p>Masz już konto?</p>
            <Button variant="text">Zaloguj się</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
