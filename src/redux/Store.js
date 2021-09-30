import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import getAllSubjectReducer from "./AllSubjects/GetAllSubjectReducer";
import getAllTeacherReducer from "./AllTeachers/GetAllTeacherReducer";
import CartReducer from "./Cart/CartReducer";
import ClassIsBookedReducer from "./ClassIsBooked/ClassIsBookReducer";
import GetSingleStudentReducer from "./GetSingleStudent/GetSingleStudentReducer";
import LoginStudentReducer from "./LoginStudent/LoginStudentReducer";
import LoginReducer from "./LoginUser/LoginReducer";
import GetSingleUserReducer from "./SingleUser/GetSingleUserReducer";
import RegisterReducer from "./User/RegisterReducer";

const rootReducer = combineReducers({
  studentLogin: LoginStudentReducer,
  userRegister: RegisterReducer,
  allTeachers: getAllTeacherReducer,
  classIsBooked: ClassIsBookedReducer,
  singleUserInfo: GetSingleUserReducer,
  singleStudentInfo: GetSingleStudentReducer,
  userLogin: LoginReducer,
  allSubjects: getAllSubjectReducer,
  cart: CartReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
