import { baseUrl } from "../../Utils/Request/Constants";
import { pdf2CommonGetRequest } from "./Pdf2ListRequest";

export const searchPdf2All = () => {
  const url = `${baseUrl}/pdf2/search/all`;
  return pdf2CommonGetRequest(url);
};

export const searchPdf2ById = (id: string) => {
  const url = `${baseUrl}/pdf2/search/by/id?id=${id}`;
  return pdf2CommonGetRequest(url);
};

export const searchPdf2ByTitle = (title: string) => {
  const url = `${baseUrl}/pdf2/search/by/title?title=${title}`;
  return pdf2CommonGetRequest(url);
};
