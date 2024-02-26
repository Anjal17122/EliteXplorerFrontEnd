import { baseUrl } from "../../Utils/Request/Constants";
import { loginUser } from "./LoginRequest";
import { LoginType } from "./LoginBody";

export const loignUserApi = (body: LoginType) => {
  const url = baseUrl + "/login";
  return loginUser(url, body);
};
