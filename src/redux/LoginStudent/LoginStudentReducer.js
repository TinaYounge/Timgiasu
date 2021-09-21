import {
  LOGIN_STUDENT_FAIL,
  LOGIN_STUDENT_REQUEST,
  LOGIN_STUDENT_SUCCESS,
} from "./LoginStudentType";
const loggedIn = !!localStorage.getItem("token");
const initialState = {
  loading: false,
  student: [],
  error: "",
  loggedIn,
};

function LoginStudentReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STUDENT_REQUEST:
      return { ...state, loading: true };
    case LOGIN_STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload,
        error: "",
        loggedIn: true,
      };
    case LOGIN_STUDENT_FAIL:
      return state;
    default:
      return state;
  }
}

export default LoginStudentReducer;
