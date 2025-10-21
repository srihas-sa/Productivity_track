// src/api.js
import axios from "axios";
import Store from "../App/Store.js"; // your Redux store
import { setCredentials } from "../Features/practice";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // Important for sending cookies
});

// 🔄 Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expired
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Call refresh token endpoint
        const res = await api.post("/refresh-token");

        const newAccessToken = res.data.accessToken;
        Store.dispatch(setCredentials({ token: newAccessToken }));

        // Update header and retry failed request
        api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest); // retry original request
      } catch (err) {
        console.error("Refresh token expired — redirecting to login");
      
      }
    }

    return Promise.reject(error);
  }
);

export default api;
