import { useNavigate } from "react-router-dom";
import { savePdf1 } from "../../Service/Pdf1List/Pdf1ListApi";
import { PDF1 } from "../../Service/SaveToc/TocType";
import TocDetail1 from "../SaveTOC/TocDetail1";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const MainPdfSavePage = () => {
  const navigate = useNavigate();
  const onDataReceived = (data: PDF1) => {
    savePdf1(data).then((res) => {
      console.log(res.data);
      navigate(`${AllUrls.urlMainUpdateListPage_}/${res.data.id}`);
    });
  };
  return <TocDetail1 result={undefined} onFormSave={onDataReceived} />;
};

export default MainPdfSavePage;
