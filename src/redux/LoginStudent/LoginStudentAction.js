import {
  LOGIN_STUDENT_FAIL,
  LOGIN_STUDENT_REQUEST,
  LOGIN_STUDENT_SUCCESS,
} from "./LoginStudentType";
import api from "../../App.api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = () => toast("Chúc mừng bạn đăng nhập thành công!");

export const LoginStudentRequest = () => {
  return {
    type: LOGIN_STUDENT_REQUEST,
  };
};

export const LoginStudentSuccess = (state) => {
  return {
    type: LOGIN_STUDENT_SUCCESS,
    payload: state,
  };
};

export const LoginStudentFail = () => {
  return {
    type: LOGIN_STUDENT_FAIL,
    payload: Error,
  };
};

export const LoginStudentAction = (state) => {
  return (dispatch) => {
    dispatch(LoginStudentRequest);
    const loginResponse = async () => {
      try {
        const res = await api.post(`api/studentAuth/login`, {
          email: state.email,
          password: state.password,
        });

        const data = await res.data;
        localStorage.setItem("studentToken", data.accessToken);
        api.defaults.headers["Authorization"] = "Bearer " + data.accessToken;
        dispatch(LoginStudentSuccess(data));
        notify();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(LoginStudentFail(errorMge));
      }
    };
    loginResponse();
  };
};
export const getSingleOwnUser = (accessToken) => {
  return (dispatch) => {
    dispatch(LoginStudentRequest);
    const getSingleUserResponse = async () => {
      try {
        if (accessToken)
          api.defaults.headers["Authorization"] = "Bearer " + accessToken;
        const res = await api.get(`api/studentAuth/me`);
        const data = await res.data;
        dispatch(LoginStudentSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(LoginStudentFail(errorMge));
      }
    };
    getSingleUserResponse();
  };
};
