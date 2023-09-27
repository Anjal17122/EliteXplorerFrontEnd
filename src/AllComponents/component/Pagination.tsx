import { useState } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

type pagination = {
  total: number;
  pageSize: number | 5;
  currentPage: (currentPage: number) => void;
};
const PaginationItem = ({ total, pageSize, currentPage }: pagination) => {
  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
    currentPage(page - 1);
  };

  return (
    <Pagination
      current={current}
      defaultPageSize={pageSize}
      onChange={onChange}
      total={total}
    />
  );
};

export default PaginationItem;
