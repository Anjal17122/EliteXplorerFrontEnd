import { baseUrl } from "../../Utils/Request/Constants";
import {
  pdf1Pdf2CommonGetRequests,
  savePaymentDetail,
} from "./Pdf1Pdf2Request";
import { PricingTemplateInterface } from "./Pdf1Pdf2Type";

export const getPdf1Pdf2ByPdf1Id = (pdf1Id: string) => {
  const url = `${baseUrl}/pdf1/pdf2/by/pdf1/${pdf1Id}`;
  return pdf1Pdf2CommonGetRequests(url);
};

export const updatePdf1Pdf2 = (pdf1Pdf2Id: string, pdf2Id: string) => {
  const url = `${baseUrl}/pdf1/pdf2/day/detail/${pdf1Pdf2Id}/${pdf2Id}`;
  return pdf1Pdf2CommonGetRequests(url);
};

export const getPricingByPdf1Pdf2 = (pdf1pdf2id: string) => {
  const url = `${baseUrl}/pricing/template?pdf1pdf2=${pdf1pdf2id}`;
  return pdf1Pdf2CommonGetRequests(url);
};

export const pdf1pdf2PricingSave = (pdf1pdf2id: PricingTemplateInterface) => {
  const url = `${baseUrl}/pricing/template`;
  return savePaymentDetail(url, pdf1pdf2id);
};

export const getPricingDetailByPdf1 = (pdf1Id: string) => {
  const url = `${baseUrl}/pricing/template/pdf1?id=${pdf1Id}`;
  return pdf1Pdf2CommonGetRequests(url);
};
