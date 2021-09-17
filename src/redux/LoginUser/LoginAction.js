import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginType";

import api from "../../App.api";

export const LoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const LoginSuccess = (state) => {
  return {
    type: LOGIN_SUCCESS,
    payload: state,
  };
};

export const LoginFail = () => {
  return {
    type: LOGIN_FAIL,
    payload: Error,
  };
};

export const LoginAction = (state) => {
  return (dispatch) => {
    dispatch(LoginRequest);
    const loginResponse = async () => {
      try {
        const res = await api.post(`api/auth/login`, {
          email: state.email,
          password: state.password,
        });
        const data = await res.data;

        dispatch(LoginSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(LoginFail(errorMge));
      }
    };
    loginResponse();
  };
};
