import {
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
} from "./GetSingleUserType";

const initialState = { loading: false, user: [], error: "" };

function GetSingleUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case GET_SINGLE_USER_SUCCESS:
      return { loading: false, user: action.payload, error: "" };
    case GET_SINGLE_USER_FAIL:
      return state;
    default:
      return state;
  }
}

export default GetSingleUserReducer;
