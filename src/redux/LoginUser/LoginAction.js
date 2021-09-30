import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../App.api";

export const notify = () => toast("Chúc mừng bạn đăng nhập thành công!");

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
        localStorage.setItem("userToken", data.accessToken);
        notify();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(LoginFail(errorMge));
      }
    };
    loginResponse();
  };
};

export const getSingleOwnUserTeacher = (accessToken) => {
  return (dispatch) => {
    dispatch(LoginRequest);
    const getSingleUserResponse = async () => {
      try {
        if (accessToken)
          api.defaults.headers["Authorization"] = "Bearer " + accessToken;
        const res = await api.get(`api/auth/me`);
        const data = await res.data;
        dispatch(LoginSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(LoginFail(errorMge));
      }
    };
    getSingleUserResponse();
  };
};
