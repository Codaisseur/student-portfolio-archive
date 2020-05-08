const initialState = {
  paragraphs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY_INFO_SUCCES":
      return {
        ...action.payload,
        paragraphs: [...action.payload.paragraphs],
      };

    default:
      return state;
  }
};
