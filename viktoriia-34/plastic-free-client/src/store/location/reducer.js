const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ONE_LOCATION": {
      const newState = {
        list: [],
        single: action.location,
      };
      return newState;
    }
    case "FIND_LOCATIONS": {
      const newState = {
        list: {
          ...state,
          rows: action.locations,
        },
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
