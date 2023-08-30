import { useParams } from "react-router-dom";
import Pdf2FormSave from "../SavePdf2/Pdf2FormSave";
import { useEffect } from "react";
import { useState } from "react";
import { getPdfById, savePdf } from "../../Service/SavePdf2/Pdf2Api";
import { pdf2Body } from "../../Service/SavePdf2/Pdf2Type";

const Pdf2FormUpdatePage = () => {
  const { id } = useParams();
  const [result, setResult] = useState<pdf2Body>();

  useEffect(() => {
    getPdfById(id === undefined ? "0" : id).then((res) => {
      setResult(res.data);
    });
  }, []);
  const saveForm = (param: pdf2Body) => {
    const body: pdf2Body = {
      ...param,
      id: id === undefined ? "0" : id,
      status: "active",
    };
    savePdf(body).then((res) => {
      console.log(res.data);
      // setResult(res.data);
    });
  };
  return <Pdf2FormSave result={result} onFormSave={saveForm} />;
};

export default Pdf2FormUpdatePage;
