import { GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS } from "./CartType";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import api from "../../App.api";

export const CartRequest = () => {
  return {
    type: GET_CART_REQUEST,
  };
};

export const CartSuccess = (state) => {
  return {
    type: GET_CART_SUCCESS,
    payload: state,
  };
};

export const CartFail = () => {
  return {
    type: GET_CART_FAIL,
    payload: Error,
  };
};
export const notifyFollowing = () =>
  toast.success("Chúc mừng bạn thanh toán thành công!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const CartUpdate = () => {
  return (dispatch) => {
    dispatch(CartRequest);
    const CartResponse = async () => {
      try {
        const res = await api.put(`api/cartOfStudent/updateCart`);
        const data = await res.data;
        dispatch(CartSuccess(data));
        notifyFollowing();
      } catch (error) {
        const errorMge = Error.message;
        dispatch(CartFail(errorMge));
      }
    };
    CartResponse();
  };
};

export const GetCart = () => {
  return (dispatch) => {
    dispatch(CartRequest);
    const CartResponse = async () => {
      try {
        const res = await api.get(`api/cartOfStudent/getAllCartsPaidOfStudent`);
        const data = await res.data;
        dispatch(CartSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(CartFail(errorMge));
      }
    };
    CartResponse();
  };
};
