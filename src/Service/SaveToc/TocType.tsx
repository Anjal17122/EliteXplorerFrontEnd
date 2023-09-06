export interface PDF1 {
  id: number;
  title: string;
  startDate: any;
  totalDays: number;
  mainText: string;
  preparedTo: string;
  inclusion: string;
  exclusion: string;
  noOfAdults: number;
  amountPerAdult: number;
  noOfChildren: number;
  amountPerChildren: number;
  currency: string;
  hint: string;
  file: string;
  subCategoryId: number;
  subCategory: string;
}
export interface sendEmailType {
  pdfId: string;
  subject: string;
  emailTo: string;
  message: string;
  pdfType: PdfType | null;
}

export enum PdfType {
  fullitinerary,
  shortitinerary,
  tocitinerary,
}

export const mapPdf1ToSendEmail = (pdfData: PDF1): sendEmailType => {
  return {
    pdfId: pdfData.id.toString(),
    subject: pdfData.title,
    emailTo: pdfData.preparedTo,
    message: pdfData.mainText,
    pdfType: null, // You can assign the appropriate PdfType value here if needed
  };
};
export interface PDF1List {
  key: number;
  id: number;
  title: string;
  startDate: any;
  totalDays: number;
  mainText: string;
  preparedTo: string;
  inclusion: string;
  exclusion: string;
  noOfAdults: number;
  amountPerAdult: number;
  noOfChildren: number;
  amountPerChildren: number;
  currency: string;
  hint: string;
  file: string;
  subCategoryId: number;
  subCategory: string;
}

export interface Pdf1TocData {
  id: number;
  title: string;
  subTitle: string;
  day: number;
  pdf1Toc: number;
}

// Example usage
export const tocSample: PDF1 = {
  id: 1,
  title: "Sample Title",
  startDate: "2023-08-27",
  totalDays: 7,
  mainText: "Sample main text.",
  preparedTo: "Sample prepared to text.",
  inclusion: "Sample inclusion text.",
  exclusion: "Sample exclusion text.",
  noOfAdults: 2,
  amountPerAdult: 100,
  noOfChildren: 1,
  amountPerChildren: 50,
  currency: "USD",
  hint: "Sample hint.",
  file: "sample.jpg",
  subCategoryId: 0,
  subCategory: "",
};

export const Pdf1ListSample: PDF1List = {
  key: 0,
  id: 0,
  title: "Sample Title",
  startDate: "2023-08-27",
  totalDays: 7,
  mainText: "Sample main text.",
  preparedTo: "Sample prepared to text.",
  inclusion: "Sample inclusion text.",
  exclusion: "Sample exclusion text.",
  noOfAdults: 2,
  amountPerAdult: 100,
  noOfChildren: 1,
  amountPerChildren: 50,
  currency: "USD",
  hint: "Sample hint.",
  file: "sample.jpg",
  subCategoryId: 0,
  subCategory: "",
};
// You can use 'data' with the defined type for type checking and accessing properties
