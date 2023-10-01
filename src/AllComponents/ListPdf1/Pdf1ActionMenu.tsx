import { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { clonePdf1, getAllPdf1 } from "../../Service/Pdf1List/Pdf1ListApi";
import Pdf1SendEmailModal from "./Pdf1SendEmailModal";
import { checkMainDownloadable } from "../../Utils/Request/Method";
import Pdf1AllDetailsModal from "../Pdf1FullDetail/Pdf1AllDetailsModal";

type DownloadMenuBody = {
  id: string;
  setData: (data: PDF1List[]) => void;
  setTableLoading: (data: boolean) => void;
};
const Pdf1ActionMenu = ({ id, setData, setTableLoading }: DownloadMenuBody) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Update Itinerary",
      onClick: () => {
        navigate(`${AllUrls.urlMainUpdateListPage_}/${id}`);
      },
    },

    {
      key: "2",
      label: "Clone Itinerary",
      onClick: () => {
        setTableLoading(true);
        clonePdf1(id).then(() => {
          getAllPdf1().then((res) => {
            const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
              key: pdf1.id,
              ...pdf1,
            }));
            message.success("Cloned Succesfully");
            setTableLoading(false);
            setData(pdf1ListArray);
          });
        });
      },
    },

    {
      key: "3",
      label: "Send Email",
      onClick: () => {
        checkMainDownloadable(id).then((a) => {
          if (a == true) {
            setModalOpen(true);
          }
        });
      },
    },
    {
      key: "4",
      label: "View Details",
      onClick: () => {
        setDetailsModal(true);
      },
    },
  ];
  return (
    <>
      <Dropdown
        trigger={["click"]}
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <Button>
          <MenuOutlined />
        </Button>
      </Dropdown>
      <Pdf1SendEmailModal setOpen={setModalOpen} open={modalOpen} pdf1Id={id} />
      <Pdf1AllDetailsModal
        modelOpen={detailsModal}
        setModelOpen={setDetailsModal}
        pdf1Id={id}
      />
    </>
  );
};

export default Pdf1ActionMenu;
