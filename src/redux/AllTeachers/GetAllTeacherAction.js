import {
  GET_ALL_TEACHER_FAIL,
  GET_ALL_TEACHER_REQUEST,
  GET_ALL_TEACHER_SUCCESS,
} from "./GetAllTeacherType";

import api from "../../App.api";

export const getAllTeacherRequest = () => {
  return {
    type: GET_ALL_TEACHER_REQUEST,
  };
};

export const getAllTeacherSuccess = (state) => {
  return {
    type: GET_ALL_TEACHER_SUCCESS,
    payload: state,
  };
};

export const getAllTeacherFail = () => {
  return {
    type: GET_ALL_TEACHER_FAIL,
    payload: Error,
  };
};

export const getAllTeachers = () => {
  return (dispatch) => {
    dispatch(getAllTeacherRequest);
    const getAllTeachersResponse = async () => {
      try {
        const res = await api.get(`api/user/teachers`);
        const data = await res.data;
        dispatch(getAllTeacherSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getAllTeacherFail(errorMge));
      }
    };
    getAllTeachersResponse();
  };
};
