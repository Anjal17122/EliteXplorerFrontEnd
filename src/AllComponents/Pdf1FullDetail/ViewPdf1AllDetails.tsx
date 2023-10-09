import { useEffect, useRef, useState } from "react";
import { getPricingDetailByPdf1 } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import {
  PricingDetailWithDays,
  PricingFullDetailType,
} from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";

import { Button, Table } from "antd";

import { ColumnsType } from "antd/es/table";
import FullDetailDescription from "./FullDetailDescription";
import { tocSample } from "../../Service/SaveToc/TocType";
import { PrinterOutlined, ReloadOutlined } from "@ant-design/icons";
import { useReactToPrint } from "react-to-print";

type ViewDetailType = { pdf1Id: string };
const ViewPdf1AllDetails = ({ pdf1Id }: ViewDetailType) => {
  const [detail, setDetails] = useState<PricingFullDetailType>();
  const [tableLoading, setTableLoading] = useState(true);
  const componentRef = useRef(null);
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
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{ float: "right" }}>
        <Button
          type="primary"
          shape="circle"
          style={{ marginRight: "10px" }}
          icon={<ReloadOutlined />}
          onClick={() => {
            getFullData();
          }}
        ></Button>
        <Button type="primary" onClick={handlePrint}>
          <PrinterOutlined />
        </Button>
      </div>
      <div ref={componentRef}>
        <FullDetailDescription
          pdf1={detail == undefined ? tocSample : detail.pdf1}
        />
        <Table
          loading={tableLoading}
          columns={columns}
          dataSource={detail?.pricingDetails}
          pagination={false}
        />
      </div>
    </>
  );
};

export default ViewPdf1AllDetails;
