import { AxiosRequestConfig } from "axios";

export const getToken = (): string => {
  const token = localStorage.getItem("token");
  return token ? token : "null";
};

export const headers = (): AxiosRequestConfig => ({
  headers: { Authorization: getToken() },
});
