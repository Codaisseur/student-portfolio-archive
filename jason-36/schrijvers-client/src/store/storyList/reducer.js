const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STORIES_SUCCES':
      return [...action.payload]
    default: 
      return state;
  }
}