const initialState = {
  alertText: "",
  text: "",
  visible: false,
  loading: true,
  notes: [],
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ALERT_RECORD":
      return {
        ...state,
        text: action.payload,
      };
    case "ALERT_SHOW":
      return {
        ...state,
        visible: true,
      };
    case "ALERT_HIDE":
      return {
        ...state,
        text: "",
        visible: false,
      };
    case "ALERT_SUBMIT":
      return {
        ...state,
        alertText: state.text,
        text: "",
      };
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
        nodes: state.notes.filter(item => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return null;
          }
        }),
        loading: true,
      };
    case "HOME_DEFOCUSED":
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
};

export default reducer;
