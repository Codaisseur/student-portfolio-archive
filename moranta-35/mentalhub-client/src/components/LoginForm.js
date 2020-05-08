import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { login } from "../store/actions/userActions";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import LinkUI from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "inherit"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)

  }
}));

function LoginForm({ login }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const jwt = useSelector(state => state.user.auth);

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {jwt ? (
          <Paper elevation={3} className={classes.paper}>
            <Typography component="h1" variant="h5">
              You are logged in
            </Typography>

            <Button
              component={Link}
              to="/"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Go to home page
            </Button>
          </Paper>
        ) : (
          <Paper elevation={3} className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log in
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <LinkUI href="/signup" variant="body2">
                    Don't have an account? Sign up
                  </LinkUI>
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}
      </Container>
    </div>
  );
}

export default connect(null, { login })(LoginForm);
