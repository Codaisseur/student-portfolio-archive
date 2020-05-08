import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import request from "superagent";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentForm
} from "@devexpress/dx-react-scheduler-material-ui";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: "20%",
    width: 800
  }
});

function Calendar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState("2020-04-05");
  const [addedAppointment, setAddedAppointment] = useState({});
  const appointments = useSelector(
    state => state.appointment.appointmentsPractician
  );
  const auth = useSelector(state => state.user.auth);
  const currentDateChange = currentDate => {
    setCurrentDate(currentDate);
  };
  console.log("added appointment ?", addedAppointment);
  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const newAppointment = {
        userId: 2,
        PracticiansFileId: props.practicianId,
        startDate: added.startDate,
        endDate: added.endDate
      };
      async function postAppointment(data) {
        try {
          console.log("data ?", data);
          const appointment = await request
            .post(`${baseUrl}/appointments`)
            .set("Authorization", `Bearer ${auth}`)
            .send(data);
          const action = {
            type: "APPOINTMENT_CREATED",
            payload: appointment.body
          };
          dispatch(action);
        } catch (error) {
          console.error(error);
        }
      }
      postAppointment(newAppointment);
    }
  };

  useEffect(() => {
    const id = props.practicianId;
    async function fetchAppointments(id) {
      const appointments = await request.get(
        `${baseUrl}/appointments/practician/${id}`
      );

      const action = {
        type: "PRACTICIAN_APPOINTMENTS",
        payload: appointments.body
      };
      dispatch(action);
    }
    fetchAppointments(id);
  }, []);

  return (
    <Paper className={classes.root}>
      <Scheduler data={appointments} height={660}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <WeekView startDayHour={9} endDayHour={19} />
        <Toolbar />
        <EditingState
          onCommitChanges={commitChanges}
          addedAppointment={addedAppointment}
          onAddedAppointmentChange={addedAppointment =>
            setAddedAppointment(addedAppointment)
          }
        />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}

export default connect(null)(Calendar);
