import { useEffect, useState } from "react";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import ListTablePdf1 from "./ListTablePdf1";
import Pdf1SearchBtn from "./Pdf1SearchBtn";
import { getAllPdf1 } from "../../Service/Pdf1List/Pdf1ListApi";

const ManageList = () => {
  const [tableData, setTableData] = useState<PDF1List[]>([]);
  useEffect(() => {
    getAllPdf1().then((res) => {
      const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
        key: pdf1.id,
        ...pdf1,
      }));
      setTableData(pdf1ListArray);
    });
  }, []);

  return (
    <>
      {/* <ListNav setData={setTableData} /> */}
      <Pdf1SearchBtn setData={setTableData} />
      <ListTablePdf1 setData={setTableData} data={tableData} />
    </>
  );
};

export default ManageList;
