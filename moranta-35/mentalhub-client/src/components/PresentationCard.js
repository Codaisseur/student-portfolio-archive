import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SubjectIcon from "@material-ui/icons/Subject";

export default function PresentationCard(props) {
  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <SubjectIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Presentation
          </Typography>
        </Grid>
        <hr />
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
        {props.languages ? (
          <div>
            <hr />
            <Typography variant="body1" component="h2">
              <b>languages spoken:</b>
            </Typography>
            <ul>
              {props.languages.map(language => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
