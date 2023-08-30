import { useNavigate } from "react-router-dom";
import { savePdfToc1 } from "../../Service/SaveToc/TocApi";
import { PDF1 } from "../../Service/SaveToc/TocType";
import TocDetail1 from "../SaveTOC/TocDetail1";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const TocDetailSave = () => {
  const navigate = useNavigate();
  const onDataReceived = (data: PDF1) => {
    savePdfToc1(data).then((res) => {
      console.log(res.data);
      navigate(`${AllUrls.urlUpdateTocPage_}/${res.data.id}`);
    });
  };
  return <TocDetail1 onFormSave={onDataReceived} result={undefined} />;
};

export default TocDetailSave;
