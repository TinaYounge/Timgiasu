import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
    // authorization: "Bearer " + localStorage.getItem("token"),
  },
});

api.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {}
);

api.interceptors.response.use(
  (response) => {
    // if (response && response.data && response.data.accessToken) {
    //   localStorage.setItem("token", response.data.accessToken);
    // }
    return response;
  },
  function (error) {
    error = error.response.data;
    if (error.errors && error.errors.message) return Promise.reject(error);
  }
);

export default api;
