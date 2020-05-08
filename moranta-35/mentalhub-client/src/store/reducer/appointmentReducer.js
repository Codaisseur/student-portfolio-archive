const initialState = {
  appointmentsPractician: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRACTICIAN_APPOINTMENTS":
      return { ...state, appointmentsPractician: payload };
    case "APPOINTMENT_CREATED":
      return {
        ...state,
        appointmentsPractician: [...state.appointmentsPractician, payload]
      };

    default:
      return state;
  }
};
