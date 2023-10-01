import { Modal } from "antd";

import ViewPdf1AllDetails from "./ViewPdf1AllDetails";

type data = {
  setModelOpen: (modalOpen: boolean) => void;
  modelOpen: boolean;
  pdf1Id: string;
};
const Pdf1AllDetailsModal = ({ setModelOpen, modelOpen, pdf1Id }: data) => {
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setModelOpen(false);
  };

  return (
    <>
      <Modal
        title="Details"
        open={modelOpen}
        centered
        width={1000}
        onOk={handleCancel}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: false }}
        footer={null}
      >
        <ViewPdf1AllDetails pdf1Id={pdf1Id} />
      </Modal>
    </>
  );
};

export default Pdf1AllDetailsModal;
