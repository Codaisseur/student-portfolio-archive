const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FOUND_COUNTRIES": {
      return action.countries;
    }
    default: {
      return state;
    }
  }
}
