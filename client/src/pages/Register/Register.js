import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center">
          <h1>Register Here</h1>
        </Grid>
        <Grid item justifyContent="center" xs={10} md={6} lg={4}>
          <form onSubmit={handleFormSubmit}>
            <InputLabel>Name</InputLabel>
            <TextField
              type="text"
              name="name"
              value={formState.name}
              fullWidth
              onChange={handleInputChange}
            />
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
            {/* <button type="submit">Register User</button> */}

            <Stack justifyContent="center" direction="row" spacing={2} padding={2}>
              <Button variant="contained" color="success">
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
