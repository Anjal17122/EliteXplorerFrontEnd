export type pdf2Body = {
  id: string;
  title: string;
  hint: string;
  subTitle: string;
  text: string;
  image1: string;
  image2: string;
  hotel: string;
  food: string;
  room: string;
  website: string;
  tocTitle: string;
  tocSubTitle: string;
  status: status;
  subCategory: string;
  subCategoryId: string;
};

type status = "active" | "inactive" | null;

export interface cascaderOption {
  value: string;
  label: string;
  children?: cascaderOption[];
}
