import { baseUrl } from "../../Utils/Request/Constants";
import { pdf1Pdf2CommonGetRequests } from "./Pdf1Pdf2Request";

export const getPdf1Pdf2ByPdf1Id = (pdf1Id: string) => {
  const url = `${baseUrl}/pdf1/pdf2/by/pdf1/${pdf1Id}`;
  return pdf1Pdf2CommonGetRequests(url);
};

export const updatePdf1Pdf2 = (pdf1Pdf2Id: string, pdf2Id: string) => {
  const url = `${baseUrl}/pdf1/pdf2/day/detail/${pdf1Pdf2Id}/${pdf2Id}`;
  return pdf1Pdf2CommonGetRequests(url);
};
