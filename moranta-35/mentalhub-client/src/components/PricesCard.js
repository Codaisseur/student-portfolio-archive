import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/Euro";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  section: {
    display: "flex"
  },
  sectionTitle: {
    flex: 1
  }
});

export default function PricesCard(props) {
  const classes = useStyles();
  const pricesList = props.pricesList;

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <EuroIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Prices
          </Typography>
        </Grid>
        <hr />
        {pricesList.map(price => {
          return (
            <div>
              <div className={classes.section}>
                <p className={classes.sectionTitle}>{Object.keys(price)}</p>
                <p>
                  <b>{Object.values(price)} €</b>
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
