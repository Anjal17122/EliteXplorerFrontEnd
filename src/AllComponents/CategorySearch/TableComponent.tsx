import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableDataType } from "./CategoryListType";
import { GET_REQUEST } from "../../Utils/Request/Method";
import { mapTable } from "./helper";
import { useGlobalState } from "../../GlobalState/GloabalStates";

const columns: ColumnsType<TableDataType> = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];

const data: TableDataType[] = [];

type TableUrl = {
  activeUrl: string;
  selectedItem: (pdf2Id: string) => void;
};
const TableComponent = ({ activeUrl, selectedItem }: TableUrl) => {
  const [refreshPost, setRefreshPost] = useGlobalState("refreshPost");
  const size = 2;
  const [tableList, setTableList] = useState(data);
  const [totalElement, setTotalElement] = useState(5);
  const [pageChange, setPageChange] = useState(0);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (refreshPost) {
      setCurrent(1);
      setPageChange(0);
    } else {
      setCurrent(pageChange + 1);
    }
    setLoading(true);
    GET_REQUEST(`${activeUrl}&size=${size}&page=${pageChange}`).then((res) => {
      setTableList(mapTable(res.data.content));
      setTotalElement(res.data.totalElements);
      setLoading(false);
    });
  }, [pageChange, activeUrl]);

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
      dataSource={tableList}
      pagination={{
        current: current,
        pageSize: size,
        total: totalElement,
        onChange: (page) => {
          setPageChange(page - 1);
          setRefreshPost(false);
        },
      }}
      loading={loading}
    />
  );
};

export default TableComponent;
