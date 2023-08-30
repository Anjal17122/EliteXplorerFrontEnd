import { useState } from "react";
import ListNav from "./ListNav";
import { PDF1List } from "../../Service/SaveToc/TocType";
import ListTablePdf1 from "./ListTablePdf1";

const ManageList = () => {
  const [tableData, setTableData] = useState<PDF1List[]>([]);
  return (
    <>
      <ListNav setData={setTableData} />
      <ListTablePdf1 data={tableData} />
    </>
  );
};

export default ManageList;
