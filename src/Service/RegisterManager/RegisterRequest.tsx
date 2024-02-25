import axios from "axios";
import { pdf2Body } from "./Pdf2Type";
import { headers } from "../../Utils/GlobalHelper/Header";
import { message } from "antd";
import { checkIfError } from "../../Utils/GlobalHelper/HandleApiError";
import { dispatch, Ac } from "../../GlobalState/GloabalStates";

export const savePdf2 = async (url: string, body: pdf2Body) => {
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

export const getPdf2 = async (url: string) => {
  try {
    const res = await axios.get(url, headers());
    // message.success(res.data.message);
    return res.data;
  } catch (error: unknown) {
    checkIfError(error);
  }
};

export const getCategory = async (url: string) => {
  try {
    const res = await axios.get(url, headers());
    return res.data;
  } catch (error: unknown) {
    checkIfError(error);
  }
};
