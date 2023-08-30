import { Button, Space, Table } from "antd";
import PaginationItem from "../component/Pagination";
import { useEffect, useState } from "react";
import { getAllTocPdf } from "../../Service/SaveToc/TocApi";
import { ColumnsType } from "antd/es/table";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { downloadpdfTOC } from "../../Utils/Request/Method";

const TocTable = () => {
  const size = 3;
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(50);
  const [tableData, setTableData] = useState();
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
              navigate(`${AllUrls.urlUpdateTocPage_}/${record.id}`);
            }}
          >
            Update
          </Button>
          <Button
            type="link"
            onClick={() => {
              downloadpdfTOC(record.id.toString());
            }}
          >
            Generate PDF
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    getAllTocPdf(current, size).then((res) => {
      const pdf1ListArray = res.data.content.map((pdf1: PDF1) => ({
        key: pdf1.id,
        ...pdf1,
      }));
      setTableData(pdf1ListArray);
      setTotal(res.data.totalElements);
      setLoading(false);
    });
  }, [current]);

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
      <PaginationItem currentPage={setCurrent} pageSize={size} total={total} />
    </>
  );
};

export default TocTable;
