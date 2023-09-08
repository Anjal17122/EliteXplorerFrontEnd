import { Button, Space, Table } from "antd";
import PaginationItem from "../component/Pagination";
import { useEffect, useState } from "react";
import { getAllTocPdf } from "../../Service/SaveToc/TocApi";
import { ColumnsType } from "antd/es/table";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { downloadpdfTOC } from "../../Utils/Request/Method";
import TocActionMenu from "./TocActionMenu";
type tableFill = { tableData: PDF1List[]; setData: (data: PDF1List[]) => void };
const TocTable = ({ tableData, setData }: tableFill) => {
  const size = 4;
  // const [current, setCurrent] = useState(0);
  // const [total, setTotal] = useState(50);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const columns: ColumnsType<PDF1List> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Prepared To",
      dataIndex: "preparedTo",
      key: "preparedTo",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              downloadpdfTOC(record.id.toString());
            }}
          >
            Generate PDF
          </Button>
          <TocActionMenu
            id={record.id.toString()}
            setData={setData}
            setTableLoading={setLoading}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize: size,
          hideOnSinglePage: true,
        }}
      />
      {/* <PaginationItem currentPage={setCurrent} pageSize={size} total={total} /> */}
    </>
  );
};

export default TocTable;
