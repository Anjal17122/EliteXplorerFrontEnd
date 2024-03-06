import { baseUrl } from "../../Utils/Request/Constants";
import { UserType } from "./RegisterBody";

import {
  saveUser,
  getLoggedInUser,
  editUser,
  getAllUserRequest,
} from "./RegisterRequest";

export const registerUserApi = (body: UserType) => {
  const url = baseUrl + "/user";
  return saveUser(url, body);
};

export const editUserApi = (body: UserType) => {
  const url = baseUrl + "/user";
  return editUser(url, body);
};

// export const getPdfById = (id: string) => {
//   const url = baseUrl + `/pdf2/by/id/${id}`;
//   return getPdf2(url);
// };

export const getByLoggedInUserApi = () => {
  const url = baseUrl + "/user/logged/detail";
  return getLoggedInUser(url);
};

export const getAllUserApi = () => {
  const url = baseUrl + "/user";
  return getAllUserRequest(url);
};

export const chageUserStatusApi = (id: number, status: string) => {
  const url =
    baseUrl + "/user/change/status?userId=" + id + "&status=" + status;
  return getAllUserRequest(url);
};

export const getAllPersonRoleApi = () => {
  const url = baseUrl + "/person/role";
  return getAllUserRequest(url);
};

export const chagneUserRoleApi = (userId: number, roleId: string) => {
  const url =
    baseUrl + "/user/change/role?userId=" + userId + "&roleId=" + roleId;
  return getAllUserRequest(url);
};

export const changeUserPasswordApi = (body: UserType) => {
  const url = baseUrl + "/user/change/password";
  return saveUser(url, body);
};
