import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (conf) => {
    const token = localStorage.getItem("token");
    if (token?.toString() !== "") {
      conf.headers.Authorization = `Bearer ${token}`;
    }

    return conf;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default api;
