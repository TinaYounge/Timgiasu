import {
  GET_SINGLE_STUDENT_FAIL,
  GET_SINGLE_STUDENT_REQUEST,
  GET_SINGLE_STUDENT_SUCCESS,
} from "./GetSingleStudentType";

const initialState = {
  loading: false,
  student: {},
  error: "",
};

function GetSingleStudentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT_REQUEST:
      return { ...state, loading: true };
    case GET_SINGLE_STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload,
        error: "",
      };
    case GET_SINGLE_STUDENT_FAIL:
      return state;
    default:
      return state;
  }
}

export default GetSingleStudentReducer;
