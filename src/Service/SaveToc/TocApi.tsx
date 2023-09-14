import { baseUrl } from "../../Utils/Request/Constants";
import {
  deleteById,
  getAllTocPdf1,
  getTocByPdf,
  getTocPdf1,
  saveTOC1,
  saveTOC2,
  tocCommonGetRequests,
} from "./Requests";
import { PDF1, Pdf1TocData } from "./TocType";

export const savePdfToc1 = (body: PDF1) => {
  const url = baseUrl + "/pdf1/toc/save";
  return saveTOC1(url, body);
};

export const savePdfToc2 = (body: Pdf1TocData) => {
  const url = baseUrl + "/toc/only/save";
  return saveTOC2(url, body);
};

export const getTocPdf1ById = (id: string) => {
  const url = `${baseUrl}/pdf1/toc/${id}`;
  return getTocPdf1(url);
};

export const tocGetByPdf = (id: number, page: number, size: number) => {
  const url = `${baseUrl}/toc/only/by/pdf1toc/${id}/${page}/${size}`;
  return getTocByPdf(url);
};

export const getAllTocPdf = () => {
  const url = `${baseUrl}/pdf1/toc/all`;
  return getAllTocPdf1(url);
};

export const deleteTocById = (id: number) => {
  const url = `${baseUrl}/toc/only/delete/${id}`;
  return deleteById(url);
};

export const searchByTitleToc = (title: string) => {
  const url = `${baseUrl}/pdf1/toc/search/by/title?title=${title}`;
  return tocCommonGetRequests(url);
};

export const searchByNameTOc = (name: string) => {
  const url = `${baseUrl}/pdf1/toc/search/by/name?name=${name}`;
  return tocCommonGetRequests(url);
};

export const searchByIdTOc = (id: string) => {
  const url = `${baseUrl}/pdf1/toc/search/by/id?id=${id}`;
  return tocCommonGetRequests(url);
};

export const cloneToc = (id: string) => {
  const url = `${baseUrl}/pdf1/toc/clone/${id}`;
  return tocCommonGetRequests(url);
};

export const transferToc = (id: string) => {
  const url = `${baseUrl}/pdf1/toc/transfer/${id}`;
  return tocCommonGetRequests(url);
};
