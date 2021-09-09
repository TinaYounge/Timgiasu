import {
  GET_ALL_SINGLE_USER_FAIL,
  GET_ALL_SINGLE_USER_REQUEST,
  GET_ALL_SINGLE_USER_SUCCESS,
} from "./GetSingleUserType";
import api from "../../App.api";

export const getSingleUserRequest = () => {
  return {
    type: GET_ALL_SINGLE_USER_REQUEST,
  };
};

export const getSingleUserSuccess = (state) => {
  return {
    type: GET_ALL_SINGLE_USER_SUCCESS,
    payload: state,
  };
};

export const getSingleUserFail = () => {
  return {
    type: GET_ALL_SINGLE_USER_FAIL,
    payload: Error,
  };
};

export const getSingleUser = (id) => {
  console.log(process.env.REACT_APP_BACKEND_API);
  console.log(" id chay toi day", id);
  return (dispatch) => {
    dispatch(getSingleUserRequest);
    const getSingleUserResponse = async () => {
      try {
        const res = await api.post(`api/user/${id.id}`);
        const data = await res.data;
        dispatch(getSingleUserSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getSingleUserFail(errorMge));
      }
    };
    getSingleUserResponse();
  };
};
