import axios from "axios";
import { headers } from "../../Utils/GlobalHelper/Header";
import { message } from "antd";
import { checkIfError } from "../../Utils/GlobalHelper/HandleApiError";
import { dispatch, Ac } from "../../GlobalState/GloabalStates";
import { LoginType } from "./LoginBody";

export const loginUser = async (url: string, body: LoginType) => {
  dispatch({ type: Ac.setDisableButton, payload: true });
  try {
    const res = await axios.post(url, body, headers());
    dispatch({ type: Ac.setDisableButton, payload: false });
    if (res.data.success == false) {
      message.error(res.data.message);
    } else {
      message.success("Login successful");
    }
    return res.data;
  } catch (error: unknown) {
    dispatch({ type: Ac.setDisableButton, payload: false });
    checkIfError(error);
  }
};
