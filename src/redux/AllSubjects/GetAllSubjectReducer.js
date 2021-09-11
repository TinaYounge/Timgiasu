import {
  GET_ALL_SUBJECT_FAIL,
  GET_ALL_SUBJECT_REQUEST,
  GET_ALL_SUBJECT_SUCCESS,
} from "./GetAllSubjectType";

const initialAllSubjects = { loading: false, user: [], err: "" };

function getAllSubjectReducer(state = initialAllSubjects, action) {
  switch (action.type) {
    case GET_ALL_SUBJECT_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload, error: "" };
    case GET_ALL_SUBJECT_FAIL:
      return state;
    default:
      return state;
  }
}

export default getAllSubjectReducer;
