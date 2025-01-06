import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import axios from "axios";

const URL = "https://project05-backend.onrender.com/api";

const apiConfig: AxiosRequestConfig = {
  baseURL: URL,
};

export const api: AxiosInstance = axios.create(apiConfig);

api.interceptors.response.use(
  (response: AxiosResponse<{ token: string }>) => {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  },
  (error: { response: { data: { detail: string } } }) => {
    console.log("Error: ", error.response.data.detail);
    return Promise.reject(new Error(error.response.data.detail));
  }
);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: { response: { data: { detail: string } } }) => {
    console.log("Error: ", error.response.data.detail);
    return Promise.reject(new Error(error.response.data.detail));
  }
);

export async function fetchCategories() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "https://project05-backend.onrender.com",
  });

  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { data } = await instance.get(`api/recipes/main-page`);
  console.log(data);

  return data;
}
