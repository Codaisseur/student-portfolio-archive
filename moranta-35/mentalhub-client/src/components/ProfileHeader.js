import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: 250,
    backgroundColor: "navy",
    alignContent: "center"
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  },
  imageContainer: {
    marginLeft: "10%",
    width: 180,
    height: 180,
    marginRight: 20
  },
  textContainer: {
    alignSelf: "center"
  },
  name: {
    color: "white"
  }
});

export default function PricesCard(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <div className={classes.imageContainer}>
        {props.profilePicture ? (
          <img className={classes.profilePicture} src={props.profilePicture} />
        ) : (
          <img
            className={classes.profilePicture}
            src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
          />
        )}
      </div>
      <div className={classes.textContainer}>
        <Typography variant="h3" className={classes.name} color="inherit">
          Dr {props.firstName} {props.lastName}
        </Typography>
        <Typography variant="h6" className={classes.name} color="inherit">
          Title
        </Typography>
      </div>
    </Grid>
  );
}
