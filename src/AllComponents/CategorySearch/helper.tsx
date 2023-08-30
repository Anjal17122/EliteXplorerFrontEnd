import { SettingOutlined } from "@ant-design/icons";
import {
  Category,
  TableDataType,
  apiTableDataType,
  oneCategory,
} from "./CategoryListType";
// import { GrDocumentUpdate } from "react-icons/gr";

export const mapCategory = (res: Category) => {
  return res.map((f: oneCategory) => {
    return {
      label: f.category,
      key: "parent " + f.id,
      icon: <SettingOutlined />,
      children: f.subCategory.map((a) => {
        return { label: a.subCategory, key: a.id };
      }),
    };
  });
};

export const mapTable = (res: apiTableDataType[]) => {
  return res.map((f: apiTableDataType): TableDataType => {
    return {
      key: f.id,
      _id: f.id,
      title: f.title,
      category: f.subCategory,
      // update: <Button type="primary">Primary Button</Button>,
      // delete: <AiFillDelete />,
    };
  });
};
