import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ContactsIcon from "@material-ui/icons/Contacts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  section: {
    flex: 1
  }
});

export default function PresentationCard(props) {
  const classes = useStyles();
  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <ContactsIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Contact details and opening hours
          </Typography>
        </Grid>
        <hr />
        <Grid container>
          <div className={classes.section}>
            <b>Opening hours</b>
          </div>
          <div className={classes.section}>
            {props.phoneNumber ? (
              <Typography variant="body2" component="p">
                <b>Phone number :</b> {props.phoneNumber}
              </Typography>
            ) : null}

            <Typography variant="body2" component="p">
              <b>email adress :</b> {props.email}
            </Typography>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
