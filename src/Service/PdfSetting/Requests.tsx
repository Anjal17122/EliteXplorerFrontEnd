import axios from "axios";
import { Ac, dispatch } from "../../GlobalState/GloabalStates";
import { headers } from "../../Utils/GlobalHelper/Header";
import { message } from "antd";
import { checkIfError } from "../../Utils/GlobalHelper/HandleApiError";
import { SettingType } from "./SettingType";

export const savePdfSetting = async (url: string, body: SettingType) => {
  dispatch({ type: Ac.setDisableButton, payload: true });
  try {
    const res = await axios.post(url, body, headers());
    dispatch({ type: Ac.setDisableButton, payload: false });
    message.success(res.data.message);
    return res.data;
  } catch (error: unknown) {
    dispatch({ type: Ac.setDisableButton, payload: false });
    checkIfError(error);
  }
};

export const getValueBySettingType = async (url: string) => {
  try {
    const res = await axios.get(url, headers());
    return res.data;
  } catch (error: unknown) {
    checkIfError(error);
  }
};
