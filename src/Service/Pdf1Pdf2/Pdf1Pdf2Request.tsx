import axios from "axios";
import { headers } from "../../Utils/GlobalHelper/Header";
import { checkIfError } from "../../Utils/GlobalHelper/HandleApiError";
import { PDF1 } from "../SaveToc/TocType";
import { Ac, dispatch } from "../../GlobalState/GloabalStates";
import { message } from "antd";
import { PricingTemplateInterface } from "./Pdf1Pdf2Type";

export const pdf1Pdf2CommonGetRequests = async (url: string) => {
  try {
    const res = await axios.get(url, headers());
    return res.data;
  } catch (error: unknown) {
    checkIfError(error);
  }
};

export const savePdf1Pdf2Request = async (url: string, body: PDF1) => {
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

export const savePaymentDetail = async (
  url: string,
  body: PricingTemplateInterface
) => {
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
