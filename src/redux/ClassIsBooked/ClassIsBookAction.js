import {
  GET_CLASS_FAIL,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
} from "./ClasIsBookType";
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

export const ClassIsBookedUpdate = () => {
  return (dispatch) => {
    dispatch(ClassIsBookedRequest);
    const ClassIsBookedResponse = async () => {
      try {
        const res = await api.put(
          `api/ClassIsBookedOfStudent/updateClassIsBooked`
        );
        const data = await res.data;
        dispatch(ClassIsBookedSuccess(data));
        notifyFollowing();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(ClassIsBookedFail(errorMge));
      }
    };
    ClassIsBookedResponse();
  };
};

export const GetClassIsBooked = () => {
  return (dispatch) => {
    dispatch(ClassIsBookedRequest);
    const ClassIsBookedResponse = async () => {
      try {
        const res = await api.get(
          `api/ClassIsBookedOfStudent/getAllClassIsBookedsPaidOfStudent`
        );
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
