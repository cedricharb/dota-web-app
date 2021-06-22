import { combineReducers } from "redux";
import listReducer from "./reducers/list.reducer";

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
