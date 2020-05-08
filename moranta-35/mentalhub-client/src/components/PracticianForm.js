import React, { useState } from "react";
import { connect } from "react-redux";
import { createPractician } from "../store/actions/practicianAction";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import EducationForm from "./EducationForm";
import EducationTag from "./EducationTag.js";
import PriceForm from "./PriceForm";
import PriceTag from "./PriceTag";

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
  },
  chip: {
    margin: theme.spacing(0.5),
    marginBottom: 15
  },
  tagContainer: {
    marginTop: 30
  }
}));

function PracticianForm({ createPractician }) {
  const classes = useStyles();
  const [presentation, setPresentation] = useState("");
  const [specializations, setSpecialization] = useState([]);
  const [education, setEducation] = useState([]);
  const [specializationEdit, setSpecializationEdit] = useState("");
  const [prices, setPrices] = useState([]);

  const data = { education, prices, presentation, specializations };

  const handleSubmit = () => {
    createPractician(data);
    setPresentation("");
    setSpecialization([]);
    setEducation([]);
    setPrices([]);
  };

  const addEducation = data => {
    setEducation([...education, data]);
  };

  const addPrice = data => {
    setPrices([...prices, data]);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Please complete your file
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="presentation"
              variant="outlined"
              multiline
              fullWidth
              id="presentation"
              label="Write a short paragraphe about yourself"
              value={presentation}
              onChange={e => setPresentation(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            {specializations.map(specialization => {
              return <Chip label={specialization} className={classes.chip} />;
            })}
            <TextField
              variant="outlined"
              fullWidth
              id="specializations"
              label="Specializations"
              name="specializations"
              value={specializationEdit}
              onChange={e => setSpecializationEdit(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                setSpecialization([...specializations, specializationEdit]);
                setSpecializationEdit("");
              }}
            >
              Add
            </Button>
          </Grid>
          <Grid container className={classes.tagContainer} spacing={2}>
            {education.map(education => {
              return (
                <Grid item>
                  <EducationTag
                    school={education.school}
                    diploma={education.diploma}
                  />
                </Grid>
              );
            })}
          </Grid>
          <EducationForm addEducation={addEducation} />
          <Grid container className={classes.tagContainer} spacing={2}>
            {prices.map(price => {
              return (
                <Grid item>
                  <PriceTag price={price} />
                </Grid>
              );
            })}
          </Grid>
          <PriceForm addPrice={addPrice} />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
}

export default connect(null, { createPractician })(PracticianForm);
