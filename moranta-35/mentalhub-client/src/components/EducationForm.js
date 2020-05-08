import React, { useState } from "react";
import "date-fns";
import { connect } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "inherit"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function EducationForm(props) {
  const classes = useStyles();
  const [school, setSchool] = useState("");
  const [diploma, setDiploma] = useState("");
  const [startDate, setStarDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const data = { school, diploma, startDate, endDate, description };
  const handleSubmit = event => {
    event.preventDefault();
    props.addEducation(data);
    setSchool("");
    setDiploma("");
    setStarDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />

      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Education
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="school"
                label="School"
                name="school"
                autoComplete="school"
                value={school}
                onChange={e => setSchool(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="diploma"
                label="Diploma"
                id="diploma"
                autoComplete="current-diploma"
                value={diploma}
                onChange={e => setDiploma(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                name="description"
                label="Description"
                id="description"
                autoComplete="current-description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="startDate"
                label="Start date"
                format="MM/dd/yyyy"
                value={startDate}
                onChange={date => setStarDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="endDate"
                label="End date"
                format="MM/dd/yyyy"
                value={endDate}
                onChange={date => setEndDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default connect(null)(EducationForm);
