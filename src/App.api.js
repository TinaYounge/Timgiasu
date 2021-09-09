import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: { "Content-type": "application/json" },
});
export default api;
