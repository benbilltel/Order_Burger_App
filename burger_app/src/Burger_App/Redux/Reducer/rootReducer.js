import { combineReducers } from "redux";
import burgerReducer from "./burgerReducer.js";
const rootReducer = combineReducers({
  burgerReducer,
});
export default rootReducer;
