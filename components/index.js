import { combineReducers } from "redux";
import counter from "./reducer";

const allReducer = combineReducers({
  temp: counter,
});

export default allReducer;
