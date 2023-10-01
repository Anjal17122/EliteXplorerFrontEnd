import { useEffect, useState } from "react";
import { getPricingDetailByPdf1 } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import {
  PricingDetailWithDays,
  PricingFullDetailType,
} from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";
import { Button, Table } from "antd";

import { ColumnsType } from "antd/es/table";
import FullDetailDescription from "./FullDetailDescription";
import { tocSample } from "../../Service/SaveToc/TocType";
import { ReloadOutlined } from "@ant-design/icons";

type ViewDetailType = { pdf1Id: string };
const ViewPdf1AllDetails = ({ pdf1Id }: ViewDetailType) => {
  const [detail, setDetails] = useState<PricingFullDetailType>();
  const [tableLoading, setTableLoading] = useState(true);

  const columns: ColumnsType<PricingDetailWithDays> = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Hotel",
      dataIndex: "hotelPrice",
      key: "hotelPrice",
    },

    {
      title: "Flight",
      dataIndex: "flightPrice",
      key: "flightPrice",
    },

    {
      title: "Guide",
      dataIndex: "guidePrice",
      key: "guidePrice",
    },
    {
      title: "Transport",
      dataIndex: "transportPrice",
      key: "transportPrice",
    },
    {
      title: "Entrance",
      dataIndex: "entrancePrice",
      key: "entrancePrice",
    },

    {
      title: "Permit",
      dataIndex: "permitPrice",
      key: "permitPrice",
    },
    {
      title: "Meal",
      dataIndex: "mealPrice",
      key: "mealPrice",
    },
    {
      title: "Extras",
      dataIndex: "extraPrice",
      key: "extraPrice",
    },
    {
      title: "Amount",
      dataIndex: "total",
      key: "total",
    },
  ];
  useEffect(() => {
    getFullData();
  }, []);

  const getFullData = () => {
    setTableLoading(true);
    getPricingDetailByPdf1(pdf1Id).then((res) => {
      console.log(res.data);
      setTableLoading(false);
      setDetails(res.data);
    });
  };

  return (
    <>
      <Button
        type="primary"
        style={{ float: "right" }}
        shape="circle"
        icon={<ReloadOutlined />}
        onClick={() => {
          getFullData();
        }}
      ></Button>

      <FullDetailDescription
        pdf1={detail == undefined ? tocSample : detail.pdf1}
      />
      <Table
        loading={tableLoading}
        columns={columns}
        dataSource={detail?.pricingDetails}
        pagination={false}
      />
    </>
  );
};

export default ViewPdf1AllDetails;
