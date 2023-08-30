import {
  Category,
  oneCategory,
} from "../../AllComponents/CategorySearch/CategoryListType";
import { cascaderOption } from "./Pdf2Type";

export const mapCascadeCategory = (res: Category): cascaderOption[] => {
  return res.map((f: oneCategory) => {
    return {
      value: "parent " + f.id,
      label: f.category,
      children: f.subCategory.map((a) => {
        return { value: a.id.toString(), label: a.subCategory };
      }),
    };
  });
};
