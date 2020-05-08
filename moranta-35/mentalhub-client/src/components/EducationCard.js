import React from "react";
import { format } from "date-fns";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import Grid from "@material-ui/core/Grid";

export default function EducationCard(props) {
  const education = props.education;
  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <SchoolIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Education
          </Typography>
        </Grid>
        <hr />
        {education.map(education => {
          return (
            <div>
              <Typography variant="h6" component="h6">
                <b>{education.school}</b>
              </Typography>
              <Typography variant="body1">
                <b>Diploma obtained:</b> {education.diploma}
              </Typography>
              <Typography variant="subtitle2">
                From :{format(new Date(education.startDate), "MM/dd/yyyy")} till{" "}
                {format(new Date(education.endDate), "MM/dd/yyyy")}
              </Typography>
              <hr />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
