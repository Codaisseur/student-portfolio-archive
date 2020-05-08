import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 464,
    overflow: "hidden",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    flexDirection: "column",
    placeContent: "center"
  },
  text: {
    color: "white"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography variant="h1" className={classes.text} align="center">
          Welcome to mentalhub
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" className={classes.text} align="center">
          Find your online psychotherapist
        </Typography>
      </Grid>
    </Grid>
  );
}
