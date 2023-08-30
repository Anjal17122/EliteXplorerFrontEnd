import React, { useState } from "react";
import { Modal } from "antd";
import CategoryListFinal from "../CategorySearch/CategoryListFinal";
import { pdf2Body } from "../../Service/SavePdf2/Pdf2Type";
import { getPdfById } from "../../Service/SavePdf2/Pdf2Api";

type data = {
  setModelOpen: (modalOpen: boolean) => void;
  modelOpen: boolean;
  setResult: (result: pdf2Body | undefined) => void;
};
const Pdf1Pdf2Modal = ({ setModelOpen, modelOpen, setResult }: data) => {
  const [clickedResult, setClickedResult] = useState<pdf2Body>();

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setResult(clickedResult);
    setModelOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setModelOpen(false);
  };
  const selectedItemId = (idPdf2: string) => {
    getPdfById(idPdf2).then((res) => {
      setClickedResult(res.data);
    });
  };
  return (
    <>
      <Modal
        title="Choose Data"
        open={modelOpen}
        centered
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
      >
        <CategoryListFinal selectedItemId={selectedItemId} />
      </Modal>
    </>
  );
};

export default Pdf1Pdf2Modal;
