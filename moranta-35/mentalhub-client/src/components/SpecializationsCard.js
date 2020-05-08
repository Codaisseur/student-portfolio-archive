import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import MoodIcon from "@material-ui/icons/Mood";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function SpecializationsCard(props) {
  const classes = useStyles();
  const specializationsList = props.specializationsList;

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <MoodIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Specializations
          </Typography>
        </Grid>
        <hr />
        {specializationsList.map(specialization => {
          return <Chip label={specialization} className={classes.chip} />;
        })}
      </CardContent>
    </Card>
  );
}
