import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [register, { error, data }] = useMutation(REGISTER_USER);

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
      const { data } = await register({
        variables: { ...formState },
      });

      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      name: '',
      email: '',
      password: '',
    });

  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center">
          <h1>Register Here</h1>
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
                  Something went wrong. Check your inputs!
                </Alert>
              </Snackbar>
            </Stack>
            <InputLabel>Name</InputLabel>
            <TextField
              type="text"
              name="name"
              value={formState.name}
              fullWidth
              onChange={handleInputChange}
              required
            />
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
            {/* <button type="submit">Register User</button> */}

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
                Register User
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
