import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (request) => {
  const sessToken = Cookies.get("__session");

  if (sessToken) {
    request.headers.Authorization = `Bearer ${sessToken}`;
  }

  return request;
});

export default apiClient;
