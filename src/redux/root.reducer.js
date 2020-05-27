import { combineReducers } from "redux";
import messageReducer from "./message/message.reducer";
import alertReducer from "./alert/alert.reducer";

const rootReducer = combineReducers({
  message: messageReducer,
  alert: alertReducer,
});

export default rootReducer;
