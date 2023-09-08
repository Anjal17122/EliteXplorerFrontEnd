import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { pdf2BodyList } from "../../Service/SavePdf2/Pdf2Type";

const columns: ColumnsType<pdf2BodyList> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Subtitle",
    dataIndex: "subTitle",
    key: "subTitle",
  },
];

type TableUrl = {
  selectedItem: (pdf2Id: string) => void;
  tableData: pdf2BodyList[];
};
const TableComponent = ({ tableData, selectedItem }: TableUrl) => {
  const size = 4;
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    selectedItem(newSelectedRowKeys[0].toString());
  };
  const rowSelection = {
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={{ type: "radio", ...rowSelection }}
      columns={columns}
      dataSource={tableData}
      pagination={{
        pageSize: size,
        hideOnSinglePage: true,
      }}
      // loading={loading}
    />
  );
};

export default TableComponent;
