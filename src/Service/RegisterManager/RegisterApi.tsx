import { baseUrl } from "../../Utils/Request/Constants";
import { UserType } from "./RegisterBody";

import { getCategory, getPdf2, savePdf2 } from "./RegisterRequest";

export const registerUserApi = (body: UserType) => {
  const url = baseUrl + "/user";
  return savePdf2(url, body);
};

export const getPdfById = (id: string) => {
  const url = baseUrl + `/pdf2/by/id/${id}`;
  return getPdf2(url);
};

export const getAllCategory = () => {
  const url = baseUrl + "/category";
  return getCategory(url);
};
