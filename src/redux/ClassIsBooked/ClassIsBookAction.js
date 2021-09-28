import {
  GET_CLASS_FAIL,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
} from "./ClassIsBookType";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import api from "../../App.api";

export const ClassIsBookedRequest = () => {
  return {
    type: GET_CLASS_REQUEST,
  };
};

export const ClassIsBookedSuccess = (state) => {
  return {
    type: GET_CLASS_SUCCESS,
    payload: state,
  };
};

export const ClassIsBookedFail = () => {
  return {
    type: GET_CLASS_FAIL,
    payload: Error,
  };
};
export const notifyFollowing = () =>
  toast("Chúc mừng bạn book lớp thành công!");
export const notifyUpdate = () => toast("Cảm ơn bạn đã cập nhật!");

export const ClassIsBookedUpdate = ({ id, state }) => {
  return (dispatch) => {
    dispatch(ClassIsBookedRequest);
    const ClassIsBookedResponse = async () => {
      try {
        const res = await api.put(`api/classIsBooked/${id}/updateClassIsBook`, {
          linkStudy: state.linkStudy,
          teacherAccept: state.teacherAccept,
          reviewFromTeacher: state.reviewFromTeacher,
        });
        const data = await res.data;
        dispatch(ClassIsBookedSuccess(data));
        notifyUpdate();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(ClassIsBookedFail(errorMge));
      }
    };
    ClassIsBookedResponse();
  };
};

export const GetClassIsAccepted = () => {
  return (dispatch) => {
    dispatch(ClassIsBookedRequest);
    const ClassIsBookedResponse = async () => {
      try {
        const res = await api.get(`api/classIsBooked/teacherAccept`);
        const data = await res.data;
        dispatch(ClassIsBookedSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(ClassIsBookedFail(errorMge));
      }
    };
    ClassIsBookedResponse();
  };
};
export const ClassIsBookedUpdateIsFinished = ({ id, state }) => {
  console.log("Finished", { id, state });
  return (dispatch) => {
    dispatch(ClassIsBookedRequest);
    const ClassIsBookedResponse = async () => {
      try {
        const res = await api.put(
          `api/classIsBooked/${id}/updateClassIsBookFinished`,
          {
            finished: state.finished,
            teacherShow: state.teacherShow,
            studentShow: state.studentShow,
            reviewFromStudent: state.reviewFromStudent,
            reviewFromTeacher: state.reviewFromTeacher,
          }
        );
        const data = await res.data;
        dispatch(ClassIsBookedSuccess(data));
        notifyUpdate();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(ClassIsBookedFail(errorMge));
      }
    };
    ClassIsBookedResponse();
  };
};
