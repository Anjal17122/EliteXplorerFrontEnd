import Pdf2FormSave from "../SavePdf2/Pdf2FormSave";
import { pdf2Body } from "../../Service/SavePdf2/Pdf2Type";
import { getPdfById, savePdf } from "../../Service/SavePdf2/Pdf2Api";
import { useEffect, useState } from "react";
import { updatePdf1Pdf2 } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import { Pdf1Pdf2Type } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";
import Pdf1Pdf2Modal from "./Pdf1Pdf2Modal";
import { Button } from "antd";
import { Pdf1TocData } from "../../Service/SaveToc/TocType";
import { getPdf1ById } from "../../Service/Pdf1List/Pdf1ListApi";

type detail = {
  pdf1Pdf2Id: number;
  pdf2Id: number;
  pdf1Id: number;
  reloadNav: (fromData: Pdf1Pdf2Type) => void;
};
const SaveDetailPdf2Form = ({
  pdf1Pdf2Id,
  pdf2Id,
  pdf1Id,
  reloadNav,
}: detail) => {
  const [result, setResult] = useState<pdf2Body>();
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    getPdfById(pdf2Id.toString()).then((res) => {
      console.log(res.data);
      setResult(res.data);
      // setResult(res.data);
    });

  }, []);
  const saveForm = (param: pdf2Body) => {
    const body: pdf2Body = {
      ...param,
      status: "inactive",
    };
    savePdf(body).then((ress) => {
      //   console.log(res.data);
      updatePdf1Pdf2(pdf1Pdf2Id.toString(), ress.data.id.toString()).then(
        (res) => {
          reloadNav(res.data);
        }
      );
    });
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        size={"large"}
        onClick={() => setOpenModel(true)}
      >
        Fill Data
      </Button>
      <Pdf1Pdf2Modal
        modelOpen={openModel}
        setModelOpen={setOpenModel}
        setResult={setResult}
      />
      <Pdf2FormSave
        result={result?.id == "0" ? undefined : result}
        onFormSave={saveForm}
      />
    </>
  );
};

export default SaveDetailPdf2Form;
