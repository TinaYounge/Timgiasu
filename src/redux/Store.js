import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import getAllTeacherReducer from "./AllTeachers/GetAllTeacherReducer";
import GetSingleUserReducer from "./SingleUser/GetSingleUserReducer";
import RegisterReducer from "./User/RegisterReducer";

const rootReducer = combineReducers({
  userRegister: RegisterReducer,
  allTeachers: getAllTeacherReducer,
  singleUserInfo: GetSingleUserReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
console.log(store.getState());
