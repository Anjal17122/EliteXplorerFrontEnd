import Pdf2FormSave from "../SavePdf2/Pdf2FormSave";
import { pdf2Body } from "../../Service/SavePdf2/Pdf2Type";
import { savePdf } from "../../Service/SavePdf2/Pdf2Api";

const Pdf2FormSavePage = () => {
  const saveForm = (param: pdf2Body) => {
    const body: pdf2Body = {
      ...param,
      status: "active",
    };
    savePdf(body).then((res) => {
      console.log(res.data);
      // setResult(res.data);
    });
  };
  return <Pdf2FormSave result={undefined} onFormSave={saveForm} />;
};

export default Pdf2FormSavePage;
