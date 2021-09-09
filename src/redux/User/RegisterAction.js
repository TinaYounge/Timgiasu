import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./RegisterType";

import api from "../../App.api";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (state) => {
  return {
    type: REGISTER_SUCCESS,
    payload: state,
  };
};

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
    payload: Error,
  };
};

export const registerUser = (state) => {
  console.log(process.env.REACT_APP_BACKEND_API);
  console.log("chay toi day", state);
  return (dispatch) => {
    dispatch(registerRequest);
    const registerResponse = async () => {
      try {
        const res = await api.post(`api/auth/register`, {
          accountType: state.accountType,
          username: state.username,
          email: state.email,
          password: state.password,
        });
        const data = await res.data;
        dispatch(registerSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(registerFail(errorMge));
      }
    };
    registerResponse();
  };
};
