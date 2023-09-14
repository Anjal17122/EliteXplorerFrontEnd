import { Space, Table } from "antd";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { PDF1List } from "../../Service/SaveToc/TocType";

import Pdf1DownloadMenu from "./Pdf1DownloadMenu";
import Pdf1ActionMenu from "./Pdf1ActionMenu";
import DeleteList from "./DeleteList";

type fulldata = { data: PDF1List[]; setData: (data: PDF1List[]) => void };
const ListTablePdf1 = ({ data, setData }: fulldata) => {
  const size = 4;
  const [loading, setLoading] = useState(false);

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
