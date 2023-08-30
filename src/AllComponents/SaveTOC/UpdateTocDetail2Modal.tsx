import { Modal } from "antd";
import { Pdf1TocData } from "../../Service/SaveToc/TocType";
import TocDetail2 from "./TocDetail2";

type tocModal = {
  openModal: boolean;
  data: Pdf1TocData;
  setOpenModal: (modalOpen: boolean) => void;
};

const UpdateTOcDetail2Modal = ({ openModal, data, setOpenModal }: tocModal) => {
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        title="Update Data"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <TocDetail2 data={data} />
      </Modal>
    </>
  );
};

export default UpdateTOcDetail2Modal;
