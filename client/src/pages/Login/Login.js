import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Register from "../Register/Register"
import Grid from '@mui/material/Grid';
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Auth from "../../utils/auth.js";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });


  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>

        <Grid container justifyContent="center">
          <Grid container justifyContent="center">
            <h1>Login Here</h1>
          </Grid>
          <Grid item justifyContent="center" xs={10} md={6} lg={4}>
            <form onSubmit={handleFormSubmit}>
              <InputLabel>Email</InputLabel>
              <TextField 
                type="email"
                name="email"
                value={formState.email}
                fullWidth
                onChange={handleInputChange}
              />
              <InputLabel>Password</InputLabel>
              <TextField
                type="password"
                name="password"
                value={formState.password}
                fullWidth
                onChange={handleInputChange}
              />
              {/* <button type="submit">Login User</button> */}
              <Stack justifyContent="center" direction="row" spacing={2} padding={2}>
                <Button variant="contained" color="success">
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
