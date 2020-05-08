import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PracticianCard from "./PracticianCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPracticians } from "../store/actions/practicianAction";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const PracticiansList = ({ fetchPracticians }) => {
  const classes = useStyles();
  const practiciansList = useSelector(state => state.practician.list);
  useEffect(() => {
    fetchPracticians();
  }, []);

  return (
    <div>
      {practiciansList ? (
        <Grid container className={classes.root} spacing={4}>
          {practiciansList.map(practician => {
            return (
              <Grid item>
                <PracticianCard
                  firstName={practician.user.firstName}
                  lastName={practician.user.lastName}
                  profilePicture={practician.user.profilePicture}
                  price={practician.prices}
                  id={practician.id}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </div>
  );
};

export default connect(null, { fetchPracticians })(PracticiansList);
