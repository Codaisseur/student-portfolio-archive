import React, { useState } from "react";
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

export default function PriceForm(props) {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  const [patient, setPatient] = useState("");

  const data = { [patient]: price };
  const handleSubmit = event => {
    event.preventDefault();
    props.addPrice(data);
    setPrice(0);
    setPatient("");
  };

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />

      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Price
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="patient"
                label="(adult, couple, children...)"
                id="patient"
                autoComplete="current-patient"
                value={patient}
                onChange={e => setPatient(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="price"
                label="price"
                name="price"
                autoComplete="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Grid>
          </Grid>
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
