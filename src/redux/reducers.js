const initialState = {
  name: "Samuel",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE-NAME": {
      return {
        ...initialState,
        name: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
export default rootReducer;
