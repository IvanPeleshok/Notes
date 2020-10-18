const initialState = {
    loading: true,
    notes: [],
    error: false,
  };
  
  const noteReducer = (state = initialState, action) => {
     switch (action.type) {
      case "POST_NOTE":
        return {
          ...state,
          loading: true,
        };
      case "GET_NOTE":
        return {
          ...state,
          notes: [...action.payload],
          loading: false,
        };
      case "DELETE_NOTE":
        return {
          ...state,
          nodes: state.notes.filter((item) => {
            if (item.id !== action.payload) {
              return item;
            } else {
              return null;
            }
          }),
          loading: true,
        };
      case "ERROR_NOTE":
        return {
          ...state,
          error: true,
        };
      case "HOME_DEFOCUSED":
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default noteReducer;
  