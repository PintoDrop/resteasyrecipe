import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Register from "../Register/Register"
import Grid from '@mui/material/Grid';
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";



import Auth from "../../utils/auth.js";

function Login() {
  const [open, setOpen] = useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  
  
  const [Login, { error, data }] = useMutation(LOGIN_USER);
  
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: '',
      password: '',
    });

  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center">
          <h1>Login Here</h1>
        </Grid>
        <Grid item justifyContent="center" xs={10} md={6} lg={4}>
          <form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Snackbar
                open={showAlert}
                sx={{ height: "100%" }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Alert
                  dismissible
                  severity="error"
                  onClose={() => setShowAlert(false)}
                >
                  Please check your login inputs!
                </Alert>
              </Snackbar>
            </Stack>
            <InputLabel>Email</InputLabel>
            <TextField
              type="email"
              name="email"
              value={formState.email}
              fullWidth
              onChange={handleInputChange}
              required
            />
            <InputLabel>Password</InputLabel>
            <TextField
              type="password"
              name="password"
              value={formState.password}
              fullWidth
              onChange={handleInputChange}
              required
            />
            {/* <button type="submit">Login User</button> */}
            <Stack
              justifyContent="center"
              direction="row"
              spacing={2}
              padding={2}
            >
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={handleClick}
              >
                Login User
              </Button>
            </Stack>
          </form>
        </Grid>

        <Register />
      </Grid>
    </>
  );
}

export default Login;
