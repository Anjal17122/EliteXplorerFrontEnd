import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PDF1, Pdf1TocData } from "../../Service/SaveToc/TocType";
import TocDetail1 from "../SaveTOC/TocDetail1";
import { getTocPdf1ById, savePdfToc1 } from "../../Service/SaveToc/TocApi";
import TocDetail2 from "../SaveTOC/TocDetail2";
import moment from "moment";
import TocDetail2Table from "../SaveTOC/TocDetail2Table";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { downloadpdfTOC } from "../../Utils/Request/Method";

const TocDetailUpdatePage = () => {
  const { id } = useParams();
  const [result, setResult] = useState<PDF1>();
  useEffect(() => {
    getTocPdf1ById(id === undefined ? "0" : id).then((res) => {
      const pdf1Data: PDF1 = res.data;
      setResult({
        ...pdf1Data,
        startDate: moment(pdf1Data.startDate),
      });
    });
  }, []);
  const onDataReceived = (data: PDF1) => {
    savePdfToc1({ ...data, id: Number(id) }).then((res) => {
      const pdf1Data: PDF1 = res.data;
      setResult({
        ...pdf1Data,
        startDate: moment(new Date(pdf1Data.startDate)),
      });
    });
  };
  const Pdf1TocDataSample: Pdf1TocData = {
    id: 0,
    title: "",
    subTitle: "",
    day: 1,
    pdf1Toc: Number(id),
  };

  const downloadPdf = () => {
    downloadpdfTOC(id === undefined ? "0" : id);
  };
  return (
    <>
      <TocDetail1 onFormSave={onDataReceived} result={result} />
      <Button
        type="primary"
        shape="round"
        value={id}
        icon={<DownloadOutlined />}
        size={"large"}
        onClick={downloadPdf}
      >
        Download
      </Button>
      <TocDetail2 data={Pdf1TocDataSample} />
      <TocDetail2Table pdf1TocId={Number(id)} />
    </>
  );
};
export default TocDetailUpdatePage;