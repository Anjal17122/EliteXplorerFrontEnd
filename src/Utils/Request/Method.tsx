import { baseUrl } from "./Constants";

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

export const downloadpdfTOC = (id: string) => {
  window.open(`${baseUrl}/pdf/2/${id}`, "_blank");
};

export const downlaodPDFMainToc = (id: string) => {
  window.open(`${baseUrl}/pdf/1/${id}`, "_blank");
};

export const downlaodPDFMain = (id: string) => {
  window.open(`${baseUrl}/pdf/0/${id}`, "_blank");
};
