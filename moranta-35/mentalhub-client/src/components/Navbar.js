import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const auth = useSelector(state => state.user.auth);
  const id = useSelector(state => state.user.userId);
  const practician = useSelector(state => state.user.practician);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mentalhub
          </Typography>
          <Button color="inherit" component={Link} to="/practicians">
            List of practicians
          </Button>
          {!auth ? (
            <div>
              <Button color="inherit" component={Link} to="/login">
                LOGIN
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                SIGNUP
              </Button>
            </div>
          ) : (
            <div>
              {practician ? (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/practician-form`}
                >
                  Fill your information
                </Button>
              ) : null}
              {/* <Button color="inherit" component={Link} to={`/user/${id}`}>
                MY PROFILE
              </Button> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
