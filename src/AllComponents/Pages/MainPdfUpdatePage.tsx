import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PDF1 } from "../../Service/SaveToc/TocType";
import TocDetail1 from "../SaveTOC/TocDetail1";
import moment from "moment";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { getPdf1ById, savePdf1 } from "../../Service/Pdf1List/Pdf1ListApi";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import EmailAndDownloadBtn from "../component/EmailAndDownloadBtn";

const TocDetailUpdatePage = () => {
  const { id } = useParams();
  const [result, setResult] = useState<PDF1>();
  const navigate = useNavigate();
  useEffect(() => {
    getPdf1ById(id === undefined ? "0" : id).then((res) => {
      const pdf1Data: PDF1 = res.data;
      setResult({
        ...pdf1Data,
        startDate: moment(new Date(pdf1Data.startDate)),
        // startDate: dayjs(new Date(pdf1Data.startDate)).format("YYYY-MM-DD"),
      });
    });
  }, []);
  const onDataReceived = (data: PDF1) => {
    savePdf1({ ...data, id: Number(id) }).then((res) => {
      const pdf1Data: PDF1 = res.data;
      setResult({
        ...pdf1Data,
        startDate: moment(new Date(pdf1Data.startDate)),
      });
    });
  };

  return (
    <>
      <Button
        type="primary"
        shape="round"
        value={id}
        icon={<ArrowRightOutlined />}
        size={"large"}
        onClick={() =>
          navigate(
            `${AllUrls.urlPdf1Pdf2DetailPage_}/${id === undefined ? "0" : id}`
          )
        }
        style={{ float: "right" }}
      >
        Fill Detail
      </Button>

      <TocDetail1 onFormSave={onDataReceived} result={result} />
      {/* <Button
        type="primary"
        shape="round"
        value={id}
        icon={<DownloadOutlined />}
        size={"large"}
        onClick={downloadPdf}
      >
        Download
      </Button> */}
      <EmailAndDownloadBtn id={id === undefined ? "0" : id} />
    </>
  );
};
export default TocDetailUpdatePage;
