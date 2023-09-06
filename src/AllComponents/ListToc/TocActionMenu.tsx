import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import {
  cloneToc,
  getAllTocPdf,
  transferToc,
} from "../../Service/SaveToc/TocApi";
import TocSendEmailModal from "./TocSendEmailModal";

type TocActionBody = {
  id: string;
  setData: (data: PDF1List[]) => void;
  setTableLoading: (data: boolean) => void;
};
const TocActionMenu = ({ id, setData, setTableLoading }: TocActionBody) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Update Itinerary",
      onClick: () => {
        navigate(`${AllUrls.urlUpdateTocPage_}/${id}`);
      },
    },

    {
      key: "2",
      label: "Clone Itinerary",
      onClick: () => {
        setTableLoading(true);
        cloneToc(id).then((a) => {
          getAllTocPdf().then((res) => {
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
      label: "Basket Transfer",
      onClick: () => {
        setTableLoading(true);
        transferToc(id).then((a) => {
          getAllTocPdf().then((res) => {
            const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
              key: pdf1.id,
              ...pdf1,
            }));
            message.success("Transferred Succesfully");
            setTableLoading(false);
            setData(pdf1ListArray);
          });
        });
      },
    },
    {
      key: "4",
      label: "Send Email",
      onClick: () => {
        setModalOpen(true);
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
      <TocSendEmailModal setOpen={setModalOpen} open={modalOpen} pdf1Id={id} />
    </>
  );
};

export default TocActionMenu;
