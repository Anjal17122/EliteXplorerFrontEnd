import { useState } from "react";
import Buttons from "./Buttons";
import NavComponent from "./NavComponent";
import TableComponent from "./TableComponent";

type finalList = { selectedItemId: (id: string) => void };
const CategoryListFinal = ({ selectedItemId }: finalList) => {
  const initialUrl: string = "/pdf2/sub/category?id=1";
  const [_id, setId] = useState("1");
  const [acitveUrl, setActiveUrl] = useState(initialUrl);
  const selectedItem = (pdf2Id: string) => {
    selectedItemId(pdf2Id);
  };
  return (
    <>
      <NavComponent currentNav={setId} urlChange={setActiveUrl} />
      <Buttons id={_id} urlChange={setActiveUrl} />
      <TableComponent selectedItem={selectedItem} activeUrl={acitveUrl} />
    </>
  );
};

export default CategoryListFinal;
