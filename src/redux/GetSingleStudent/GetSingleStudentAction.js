import {
  GET_SINGLE_STUDENT_FAIL,
  GET_SINGLE_STUDENT_REQUEST,
  GET_SINGLE_STUDENT_SUCCESS,
} from "./GetSingleStudentType";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import api from "../../App.api";

export const notifyBookSuccess = () =>
  toast.success("Thông tin lớp bạn đăng kí sẽ gửi cho gia sư!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const getSingleStudentRequest = () => {
  return {
    type: GET_SINGLE_STUDENT_REQUEST,
  };
};

export const getSingleStudentSuccess = (state) => {
  return {
    type: GET_SINGLE_STUDENT_SUCCESS,
    payload: state,
  };
};

export const getSingleStudentFail = () => {
  return {
    type: GET_SINGLE_STUDENT_FAIL,
    payload: Error,
  };
};

export const getSingleStudent = (id) => {
  return (dispatch) => {
    dispatch(getSingleStudentRequest);
    const getSingleStudentResponse = async () => {
      try {
        const res = await api.get(`api/student/${id}`);
        const data = await res.data;
        dispatch(getSingleStudentSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getSingleStudentFail(errorMge));
      }
    };
    getSingleStudentResponse();
  };
};
//Update info Student
export const AddCartToStudent = (state) => {
  return (dispatch) => {
    dispatch(getSingleStudentRequest);
    const UpdateResponse = async () => {
      try {
        const res = await api.put(`api/student/addCart`, {
          classId: state.classId,
          idPrice: state.idPrice,
          value: state.value,
          paid: state.paid,
          userId: state.userId,
          subject: state.subject,
          classCanBook: state.classCanBook,
        });
        const data = await res.data;
        dispatch(getSingleStudentSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getSingleStudentFail(errorMge));
      }
    };

    UpdateResponse();
  };
};

//Update info Student
export const AddClassIsBookToStudent = (state) => {
  return (dispatch) => {
    dispatch(getSingleStudentRequest);
    const UpdateResponse = async () => {
      try {
        const res = await api.put(`api/student/addClassIsBooked`, {
          day: state.day,
          timeId: state.timeId,
          userId: state.userId,
          classId: state.classId,
          finished: state.finished,
          typeOfTeaching: state.typeOfTeaching,
          billId: state.billId,
          subject: state.subject,
          teacherAccept: "No",
        });
        const data = await res.data;
        dispatch(getSingleStudentSuccess(data));
        notifyBookSuccess();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(getSingleStudentFail(errorMge));
      }
    };
    UpdateResponse();
  };
};
