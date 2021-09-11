import {
  GET_ALL_SUBJECT_FAIL,
  GET_ALL_SUBJECT_REQUEST,
  GET_ALL_SUBJECT_SUCCESS,
} from "./GetAllSubjectType";

import api from "../../App.api";

export const getAllSubjectRequest = () => {
  return {
    type: GET_ALL_SUBJECT_REQUEST,
  };
};

export const getAllSubjectSuccess = (state) => {
  return {
    type: GET_ALL_SUBJECT_SUCCESS,
    payload: state,
  };
};

export const getAllSubjectFail = () => {
  return {
    type: GET_ALL_SUBJECT_FAIL,
    payload: Error,
  };
};

export const getAllSubjects = () => {
  console.log(process.env.REACT_APP_BACKEND_API);
  return (dispatch) => {
    dispatch(getAllSubjectRequest);
    const getAllSubjectsResponse = async () => {
      try {
        const res = await api.get(`/api/subject/`);
        const data = await res.data;
        dispatch(getAllSubjectSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getAllSubjectFail(errorMge));
      }
    };
    getAllSubjectsResponse();
  };
};
