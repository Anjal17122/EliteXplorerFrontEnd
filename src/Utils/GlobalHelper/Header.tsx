import { AxiosRequestConfig } from "axios";
import { localStorageLoginSuccess } from "../Request/LocalStorageConstant";
import { LoginTypeSuccess } from "../../Service/LoginManager/LoginBody";

export const getToken = (): string => {
  const userData = localStorage.getItem(localStorageLoginSuccess);
  if (userData != null) {
    const parsedUserData: LoginTypeSuccess = JSON.parse(userData);
    return parsedUserData.token;
  } else {
    return "null";
  }
};

export const headers = (): AxiosRequestConfig => ({
  headers: { Authorization: getToken() },
});
