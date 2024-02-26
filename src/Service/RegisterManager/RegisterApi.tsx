import { baseUrl } from "../../Utils/Request/Constants";
import { UserType } from "./RegisterBody";

import { saveUser, getLoggedInUser, editUser } from "./RegisterRequest";

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
