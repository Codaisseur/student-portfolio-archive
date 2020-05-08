const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FOUND_CITIES": {
      return action.cities;
    }
    default: {
      return state;
    }
  }
}
