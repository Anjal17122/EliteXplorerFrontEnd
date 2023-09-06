import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { Link, useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import type { MenuProps } from "antd";
import {
  downlaodPDFMain,
  downlaodPDFMainToc,
} from "../../Utils/Request/Method";
import MenuComponent from "../component/MenuComponent";
import Pdf1DownloadMenu from "./Pdf1DownloadMenu";
import Pdf1ActionMenu from "./Pdf1ActionMenu";
import DeleteList from "./DeleteList";
import Pdf1SendEmailModal from "./Pdf1SendEmailModal";

type fulldata = { data: PDF1List[]; setData: (data: PDF1List[]) => void };
const ListTablePdf1 = ({ data, setData }: fulldata) => {
  const size = 5;
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
      title: "Days",
      dataIndex: "totalDays",
      key: "totalDays",
    },

    {
      title: "Download",
      key: "Downloads",
      render: (_, record) => <Pdf1DownloadMenu id={record.id.toString()} />,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Pdf1ActionMenu
            id={record.id.toString()}
            setTableLoading={setLoading}
            setData={setData}
          />
          <DeleteList
            id={record.id.toString()}
            setTableLoading={setLoading}
            setData={setData}
          />
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   setLoading(true);
  //   getAllTocPdf(current, size).then((res) => {
  //     const pdf1ListArray = res.data.content.map((pdf1: PDF1) => ({
  //       key: pdf1.id,
  //       ...pdf1,
  //     }));
  //     setTableData(pdf1ListArray);
  //     setTotal(res.data.totalElements);
  //     setLoading(false);
  //   });
  // }, [current]);

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: size,
          hideOnSinglePage: true,
        }}
      />

      {/* <PaginationItem currentPage={setCurrent} pageSize={size} total={total} /> */}
    </>
  );
};

export default ListTablePdf1;
