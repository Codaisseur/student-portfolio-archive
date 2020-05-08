import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function PracticianCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              className={classes.image}
              component={Link}
              to={`/practicians/${props.id}`}
            >
              {props.profilePicture ? (
                <img className={classes.img} src={props.profilePicture} />
              ) : (
                <img
                  className={classes.img}
                  src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
                />
              )}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Dr {props.firstName} {props.lastName}
                </Typography>
              </Grid>
              <Grid item>
                <ButtonBase component={Link} to={`/practicians/${props.id}`}>
                  Learn More
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
