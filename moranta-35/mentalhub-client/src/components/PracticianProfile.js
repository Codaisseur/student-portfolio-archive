import React, { useEffect } from "react";
import request from "superagent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PresentationCard from "./PresentationCard";
import PricesCard from "./PricesCard";
import SpecializationsCard from "./SpecializationsCard";
import EducationCard from "./EducationCard";
import ContactCard from "./ContactCard";
import { singlePractician } from "../store/actions/practicianAction";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProfileHeader from "./ProfileHeader";
import Calendar from "./Calendar";
import { Paper, Typography } from "@material-ui/core";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    marginTop: 20
  },
  card: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: "20%",
    width: 800
  },
  cardIcon: {
    alignSelf: "center",
    marginRight: 10
  },
  page: {
    backgroundColor: "azure"
  }
});

export default function PracticianProfile(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const practician = useSelector(state => state.practician.displayedPractician);
  const auth = useSelector(state => state.user.auth);
  useEffect(() => {
    const id = props.match.params.id;
    async function fetchPractician(id) {
      const practician = await request.get(`${baseUrl}/practicians/${id}`);
      const action = singlePractician(practician.body);
      dispatch(action);
    }
    fetchPractician(id);
  }, []);

  return (
    <div className={classes.page}>
      {practician ? (
        <div>
          <ProfileHeader
            firstName={practician.user.firstName}
            lastName={practician.user.lastName}
            profilePicture={practician.user.profilePicture}
          />
          <Grid container className={classes.root}>
            {auth ? (
              <Calendar practicianId={practician.id} />
            ) : (
              <Paper className={classes.card}>
                <Typography>Please log in to make an appointment</Typography>
              </Paper>
            )}
            <PresentationCard
              description={practician.presentation}
              languages={practician.user.languages}
              style={classes}
            />
            <PricesCard pricesList={practician.prices} style={classes} />
            <SpecializationsCard
              specializationsList={practician.specializations}
              style={classes}
            />
            <EducationCard education={practician.education} style={classes} />
            <ContactCard
              style={classes}
              email={practician.user.email}
              phoneNumber={practician.user.whatsAppNumber}
            />
          </Grid>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
