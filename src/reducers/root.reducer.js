import { combineReducers } from "redux";
// import authReducer from "./auth/auth.reducer";
import alertReducer from "./alert/alertReducer.js";
import noteReducer from "./notes/noteReducer.js";
// import { logger } from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// const middlewares = [logger];

const rootReducer = combineReducers({
  alrt: alertReducer,
  note: noteReducer,
});

export default rootReducer;
