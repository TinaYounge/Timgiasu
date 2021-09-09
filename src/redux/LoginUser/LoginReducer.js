import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginType";

const initialState = { loading: false, user: [], error: "" };

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload, error: "" };
    case LOGIN_FAIL:
      return state;
    default:
      return state;
  }
}

export default LoginReducer;
