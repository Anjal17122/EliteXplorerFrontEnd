import { baseUrl } from "../../Utils/Request/Constants";
import { PDF1 } from "../SaveToc/TocType";
import { pdf1CommonGetRequests, savePdf1Request } from "./Pdf1Request";

export const getAllPdf1 = () => {
  const url = `${baseUrl}/main/pdf1/all`;
  return pdf1CommonGetRequests(url);
};

export const getByCategory = (categoryId: string) => {
  const url = `${baseUrl}/main/pdf1/subcategory?category=${categoryId}`;
  return pdf1CommonGetRequests(url);
};

export const savePdf1 = (body: PDF1) => {
  const url = `${baseUrl}/main/pdf1/save/pdf1`;
  return savePdf1Request(url, body);
};

export const getPdf1ById = (id: string) => {
  const url = `${baseUrl}/main/pdf1/${id}`;
  return pdf1CommonGetRequests(url);
};
