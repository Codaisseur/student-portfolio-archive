export default function(state = [], action) {
  switch (action.type) {
    case "ERROR_MESSAGE":
      if (Array.isArray(action.payload)) {
        return action.payload;
      } else {
        return [...state, action.payload];
      }

    case "REMOVE_ERROR":
      return (state = []);

    default:
      return state;
  }
}
