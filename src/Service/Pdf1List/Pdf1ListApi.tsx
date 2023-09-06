import { baseUrl } from "../../Utils/Request/Constants";
import { PDF1 } from "../SaveToc/TocType";
import { pdf1CommonGetRequests, savePdf1Request } from "./Pdf1Request";

export const getAllPdf1 = () => {
  const url = `${baseUrl}/main/pdf1/all`;
  return pdf1CommonGetRequests(url);
};

export const searchByTitlePdf1 = (title: string) => {
  const url = `${baseUrl}/main/pdf1/search/by/title?title=${title}`;
  return pdf1CommonGetRequests(url);
};

export const searchByNamePdf1 = (name: string) => {
  const url = `${baseUrl}/main/pdf1/search/by/name?name=${name}`;
  return pdf1CommonGetRequests(url);
};

export const searchByIdPdf1 = (id: string) => {
  const url = `${baseUrl}/main/pdf1/search/by/id?id=${id}`;
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

export const clonePdf1 = (id: string) => {
  const url = `${baseUrl}/main/pdf1/clone/${id}`;
  return pdf1CommonGetRequests(url);
};

export const deletePdf1 = (id: string) => {
  const url = `${baseUrl}/main/pdf1/delete/${id}`;
  return pdf1CommonGetRequests(url);
};
