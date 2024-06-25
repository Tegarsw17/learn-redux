import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducers";

const reducers = combineReducers({
  authReducer,
  menuReducer,
});

export { reducers };
