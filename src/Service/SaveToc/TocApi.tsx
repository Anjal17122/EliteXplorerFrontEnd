import { baseUrl } from "../../Utils/Request/Constants";
import {
  deleteById,
  getAllTocPdf1,
  getTocByPdf,
  getTocPdf1,
  saveTOC1,
  saveTOC2,
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

export const getAllTocPdf = (page: number, size: number) => {
  const url = `${baseUrl}/pdf1/toc/all/${page}/${size}`;
  return getAllTocPdf1(url);
};

export const deleteTocById = (id: number) => {
  const url = `${baseUrl}/toc/only/delete/${id}`;
  return deleteById(url);
};
