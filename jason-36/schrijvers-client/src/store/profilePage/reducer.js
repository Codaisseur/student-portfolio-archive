const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'STORIES_BY_USERID':
      return [...action.payload];
    
    case 'LOGOUT_PROFILEPAGE':
        return [];
    default: 
      return state;
  }
}

