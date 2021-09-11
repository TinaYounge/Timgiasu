import axios from "axios";

const cloudApi = axios.create({
  baseURL: process.env.CLOUD_APP_API,
  headers: { "Content-type": "application/json" },
});
export default cloudApi;
