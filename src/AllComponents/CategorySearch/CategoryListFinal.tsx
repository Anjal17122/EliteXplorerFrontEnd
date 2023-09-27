import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import TableComponent from "./TableComponent";
import { pdf2Body, pdf2BodyList } from "../../Service/SavePdf2/Pdf2Type";
import { searchPdf2All } from "../../Service/Pdf2List/Pdf2ListApi";

type finalList = { selectedItemId: (id: string) => void };
const CategoryListFinal = ({ selectedItemId }: finalList) => {
  const [tableData, setTableData] = useState<pdf2BodyList[]>([]);
  useEffect(() => {
    searchPdf2All().then((res) => {
      const pdf2ListArray: pdf2BodyList[] = res.data.map((pdf2: pdf2Body) => ({
        key: pdf2.id,
        ...pdf2,
      }));
      setTableData(pdf2ListArray);
    });
  }, []);

  const selectedItem = (pdf2Id: string) => {
    selectedItemId(pdf2Id);
  };
  return (
    <>
      {/* <NavComponent currentNav={setId} urlChange={setActiveUrl} /> */}
      <Buttons setPdf2List={setTableData} />
      <TableComponent selectedItem={selectedItem} tableData={tableData} />
    </>
  );
};

export default CategoryListFinal;
