const initialState = {
  jwt: "",
  user: {},
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "LOGOUT_USER": {
      return {
        jwt: "",
        user: {},
      };
    }
    case "LOGIN_SESSION": {
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };
    }
    case "NEW_USER": {
      return { ...state, user: action.payload };
    }
    case "FETCH_USER": {
      console.log(action.user);
      return {
        ...state,
        user: action.user,
      };
    }
    case "LIKED_LOCATION": {
      console.log("old state", state);
      const newLocations = state.user.Location
        ? [...state.user.Location, { id: action.data.locationId }]
        : [{ id: action.data.locationId }];
      const newState = {
        ...state,
        user: {
          ...state.user,
          Location: newLocations,
        },
      };
      console.log("newState", newState);

      return newState;
    }
    case "DISLIKED_LOCATION": {
      console.log(action.data); //{userId: 2, locationId: 12}
      console.log("old state", state);
      const oldLocations = [...state.user.Location];
      const newLocations = oldLocations.filter(
        (l) => l.id !== action.data.locationId
      );
      const newState = {
        ...state,
        user: {
          ...state.user,
          Location: newLocations,
        },
      };
      return newState;
    }
    // case "LIKED_LOCATION": {
    //   const newState = {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       Location: [...state.user.Location, { id: action.data.locationId }],
    //     },
    //   };
    //   return newState;
    // }
    // case "DISLIKED_LOCATION": {
    //   console.log(action.data); //{userId: 2, locationId: 12}
    //   console.log("old state", state);
    //   const oldLocations = [...state.user.Location];
    //   const newLocations = oldLocations.filter(
    //     (l) => l.id !== action.data.locationId
    //   );
    //   const newState = {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       Location: newLocations,
    //     },
    //   };
    //   return newState;
    // }
    default:
      return state;
  }
}
