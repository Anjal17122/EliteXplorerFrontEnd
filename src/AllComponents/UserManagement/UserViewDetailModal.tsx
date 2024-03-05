import { Modal } from "antd";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import UserDetailViewTable from "../UserDetailView/UserDetailViewTable";

type data = {
  setModelOpen: (modalOpen: boolean) => void;
  modelOpen: boolean;
  userData: UserType;
};
const UserViewDetailModal = ({ setModelOpen, modelOpen, userData }: data) => {
  const handleOk = () => {
    setModelOpen(false);
  };

  const handleCancel = () => {
    setModelOpen(false);
  };

  return (
    <>
      <Modal
        open={modelOpen}
        centered
        width={700}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: false }}
      >
        <UserDetailViewTable user={userData} />
      </Modal>
    </>
  );
};

export default UserViewDetailModal;
