import axios from "axios";
import { checkIfError } from "../../Utils/GlobalHelper/HandleApiError";
import { headers } from "../../Utils/GlobalHelper/Header";

export const pdf2CommonGetRequest = async (url: string) => {
  try {
    const res = await axios.get(url, headers());
    return res.data;
  } catch (error: unknown) {
    checkIfError(error);
  }
};
