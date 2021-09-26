import {
  GET_CLASS_FAIL,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
} from "./ClassIsBookType";

const initialState = {
  loading: false,
  classIsBooked: {},
  error: "",
};

function ClassIsBookedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLASS_REQUEST:
      return { ...state, loading: true };
    case GET_CLASS_SUCCESS:
      return {
        loading: false,
        classIsBooked: action.payload,
        error: "",
      };
    case GET_CLASS_FAIL:
      return state;
    default:
      return state;
  }
}

export default ClassIsBookedReducer;
