import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


api.interceptors.request.use((config) => {
  if (config.url?.includes("/admin/login")) {
    return config;
  }

  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  if (!token) {
    window.location.href = "/admin/login";
    return Promise.reject("Sem token");
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
