export type Category = {
  id: string;
  category: string;
  subCategory: {
    id: number;
    subCategory: string;
  }[];
}[];

export type oneCategory = {
  id: string;
  category: string;
  subCategory: {
    id: number;
    subCategory: string;
  }[];
};

export type TableDataType = {
  key: string;
  _id: string;
  title: string;
  category: string;
  // update: ReactNode;
  // delete: ReactNode;
};

export type apiTableDataType = {
  id: string;
  title: string;
  subCategory: string;
};
