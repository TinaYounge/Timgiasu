import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import getAllSubjectReducer from "./AllSubjects/GetAllSubjectReducer";
import getAllTeacherReducer from "./AllTeachers/GetAllTeacherReducer";
import LoginStudentReducer from "./LoginStudent/LoginStudentReducer";
import LoginReducer from "./LoginUser/LoginReducer";
import GetSingleUserReducer from "./SingleUser/GetSingleUserReducer";
import RegisterReducer from "./User/RegisterReducer";

const rootReducer = combineReducers({
  studentLogin: LoginStudentReducer,
  userRegister: RegisterReducer,
  allTeachers: getAllTeacherReducer,
  singleUserInfo: GetSingleUserReducer,
  userLogin: LoginReducer,
  allSubjects: getAllSubjectReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
store.getState();
