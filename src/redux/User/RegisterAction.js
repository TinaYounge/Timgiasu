import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./RegisterType";

import api from "../../App.api";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (state) => {
  return {
    type: REGISTER_SUCCESS,
    payload: state,
  };
};

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
    payload: Error,
  };
};

export const registerUser = (state) => {
  return (dispatch) => {
    dispatch(registerRequest);
    const registerResponse = async () => {
      try {
        const res = await api.post(`api/auth/register`, {
          accountType: state.accountType,
          username: state.username,
          email: state.email,
          password: state.password,
        });
        const data = await res.data;
        dispatch(registerSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(registerFail(errorMge));
      }
    };
    registerResponse();
  };
};

//Update info user
export const UpdateInfoUser = (state, id) => {
  return (dispatch) => {
    dispatch(registerRequest);

    const UpdateResponse = async () => {
      try {
        const res = await api.put(`api/user/${id}`, {
          fullname: state.fullname,
          profilePicture: state.profilePicture,
          desc: state.desc,
          city: state.city,
          district: state.district,
          sex: state.sex,
          company: state.company,
          typeOfTeaching: state.typeOfTeaching,
          phoneNumber: state.phoneNumber,
        });

        const data = await res.data;
        dispatch(registerSuccess(data));
      } catch (error) {
        const errorMge = Error.message;
        dispatch(registerFail(errorMge));
      }
    };
    UpdateResponse();
  };
};
