import { Space, Table, Tag, Button, Pagination, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Pdf1TocData } from "../../Service/SaveToc/TocType";
import { useEffect, useState } from "react";
import { deleteTocById, tocGetByPdf } from "../../Service/SaveToc/TocApi";
import PaginationItem from "../component/Pagination";
import UpdateTOcDetail2Modal from "./UpdateTocDetail2Modal";

type data = {
  pdf1TocId: number;
};
const TocDetail2Table = ({ pdf1TocId }: data) => {
  const Pdf1TocDataSample: Pdf1TocData = {
    id: 0,
    title: "",
    subTitle: "",
    day: 1,
    pdf1Toc: pdf1TocId,
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [record, setRecord] = useState<Pdf1TocData>(Pdf1TocDataSample);
  const columns: ColumnsType<Pdf1TocData> = [
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
      title: "Sub Title",
      dataIndex: "subTitle",
      key: "subTitle",
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              setRecord(record);
              setModalOpen(true);
            }}
          >
            Update
          </Button>
          <Button
            type="link"
            onClick={() => {
              deleteTocById(record.id).then((res) => {
                message.success("Deleted Successfully");
              });
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const size = 4;
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(50);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    setLoading(true);
    tocGetByPdf(pdf1TocId, current, size).then((res) => {
      setTableData(res.data.content);
      setTotal(res.data.totalElements);
      setLoading(false);
    });
  }, [current]);
  return (
    <>
      <UpdateTOcDetail2Modal
        data={record}
        openModal={modalOpen}
        setOpenModal={setModalOpen}
      />
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

export default TocDetail2Table;
