const initialState = {
  alertText: "",
  text: "",
  visible: false,
};

const alertReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default alertReducer;
