import { baseUrl } from "../../Utils/Request/Constants";
import { pdf2Body } from "./Pdf2Type";
import { getCategory, getPdf2, savePdf2 } from "./Request";

export const savePdf = (body: pdf2Body) => {
  const url = baseUrl + "/pdf2/save/pdf2";
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
