import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { API_URL, EMAIL_EXPRESS, PASSWORD_EXPRESS } from "../../constant";
import { Link } from "react-router-dom";
import Copyright from "../../components/Footer/CopyRight";
import { SignUpWeb } from "../../api/apis";
import { useSnackbar } from "notistack";
import { errorConfig, successConfig } from "../../utils/alert/AlertConfig";

const theme = createTheme();

export default function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState({
    method: "Register",
    userName: "",
    password: "",
    password2: "",
    email: "",
  });
  const [validation, setValidation] = useState({
    v_userName: true,
    v_password: true,
    v_passwrod2: true,
    v_email: true,
  });

  const { userName, password, password2, email } = data;
  const { v_userName, v_password, v_password2, v_email } = validation;
  const handleChange = (e) => {
    validationHandler();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const validationHandler = () => {
    let tempValidation = {
      v_userName: Boolean(userName),
      v_password: Boolean(password) && PASSWORD_EXPRESS.test(password),
      v_password2: Boolean(password2),
      v_email: Boolean(email) && EMAIL_EXPRESS.test(email),
    };
    const { v_userName, v_password, v_password2, v_email } = tempValidation;
    if (password !== password2) {
      setValidation({ ...tempValidation, v_password2: false });
    } else {
      setValidation(tempValidation);
    }

    return Object.values(tempValidation).every((field) => field);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("123");
    if (validationHandler()) {
      SignUpWeb({
        userName: userName,
        password: password,
        password2: password2,
        email: email,
      })
        .then(function (res) {
          const obj = res.data;
          const OK = obj.code === "Ok";
          if (OK) {
            enqueueSnackbar(obj.message, successConfig);
          } else {
            enqueueSnackbar(obj.message, errorConfig);
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    } else {
      console.log(validation);
      console.log("err");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={!v_userName}
            margin="normal"
            required
            fullWidth
            id="userName"
            label="UserName"
            name="userName"
            autoComplete="email"
            onChange={handleChange}
            helperText={!v_userName && "請輸入正確名稱"}
            autoFocus
          />
          <TextField
            error={!v_password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            helperText={!v_password && "請輸入6~12字"}
            autoComplete="current-password"
          />
          <TextField
            error={!v_password2}
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password2"
            type="password"
            id="password2"
            onChange={handleChange}
            helperText={!v_password2 && "請輸入6~12字，或確認是否與密碼相同"}
            autoComplete="current-password"
          />
          <TextField
            error={!v_email}
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            id="email"
            onChange={handleChange}
            helperText={!v_email && "請輸入正確email格式"}
            autoComplete
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/signin">Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
