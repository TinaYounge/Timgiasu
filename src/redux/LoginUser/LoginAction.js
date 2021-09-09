import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginType";

import api from "../../App.api";

export const getSingleUserRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const getSingleUserSuccess = (state) => {
  return {
    type: LOGIN_SUCCESS,
    payload: state,
  };
};

export const getSingleUserFail = () => {
  return {
    type: LOGIN_FAIL,
    payload: Error,
  };
};

export const Login = (state) => {
  console.log(process.env.REACT_APP_BACKEND_API);
  return (dispatch) => {
    dispatch(getSingleUserRequest);
    const loginUser = async () => {
      try {
        const res = await api.post(`api/auth/login`, {
          email: state.email,
          password: state.password,
        });
        const data = await res.data;
        dispatch(getSingleUserSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getSingleUserFail(errorMge));
      }
    };
    loginUser();
  };
};
