import {
  GET_ALL_TEACHER_FAIL,
  GET_ALL_TEACHER_REQUEST,
  GET_ALL_TEACHER_SUCCESS,
} from "./GetAllTeacherType";

const initialAllTeachers = { loading: false, user: [], err: "" };

function getAllTeacherReducer(state = initialAllTeachers, action) {
  switch (action.type) {
    case GET_ALL_TEACHER_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_TEACHER_SUCCESS:
      return { loading: false, user: action.payload, error: "" };
    case GET_ALL_TEACHER_FAIL:
      return state;
    default:
      break;
  }
}

export default getAllTeacherReducer;
