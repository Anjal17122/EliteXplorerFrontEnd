import axios from "axios";
import { baseUrl } from "./Constants";
import { headers } from "../GlobalHelper/Header";
import { checkIfError } from "../GlobalHelper/HandleApiError";
import { Ac, dispatch } from "../../GlobalState/GloabalStates";
import { message } from "antd";
import { sendEmailType } from "../../Service/SaveToc/TocType";

export const GET_REQUEST = async (url: string) => {
  try {
    const res = await fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw alert(error.message);
  }
};

export const checkMainDownloadable = async (id: string): Promise<boolean> => {
  let url = `${baseUrl}/pdf1/pdf2/check/downloadable?id=${id}`;
  try {
    await axios.get(url, headers());
    return true;
  } catch (error: unknown) {
    checkIfError(error);
    return false;
  }
};
const sendEmailRequest = async (url: string, body: sendEmailType) => {
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

export const downloadpdfTOC = (id: string) => {
  window.open(`${baseUrl}/pdf/2/${id}`, "_blank");
};

export const downlaodPDFMainToc = (id: string) => {
  checkMainDownloadable(id).then((res) => {
    if (res == true) {
      window.open(`${baseUrl}/pdf/1/${id}`, "_blank");
    }
  });
};

export const downlaodPDFMain = (id: string) => {
  checkMainDownloadable(id).then((res) => {
    if (res == true) {
      window.open(`${baseUrl}/pdf/0/${id}`, "_blank");
    }
  });
};

export const sendEmail = (body: sendEmailType) => {
  const url = `${baseUrl}/email`;
  return sendEmailRequest(url, body);
};
