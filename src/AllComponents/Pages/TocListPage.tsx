import { useEffect, useState } from "react";
import TocTable from "../ListToc/TocTable";
import { getAllTocPdf } from "../../Service/SaveToc/TocApi";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import TocSearchBtn from "../ListToc/TocSearchBtn";

const TocListPage = () => {
  const [tableData, setTableData] = useState<PDF1List[]>([]);

  useEffect(() => {
    getAllTocPdf().then((res) => {
      const pdf1ListArray = res.data.map((pdf1: PDF1) => ({
        key: pdf1.id,
        ...pdf1,
      }));
      setTableData(pdf1ListArray);
    });
  }, []);
  return (
    <>
      {" "}
      <TocSearchBtn setData={setTableData} />
      <TocTable setData={setTableData} tableData={tableData} />
    </>
  );
};

export default TocListPage;
