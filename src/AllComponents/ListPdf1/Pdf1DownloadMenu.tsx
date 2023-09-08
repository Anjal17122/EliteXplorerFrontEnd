import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  downlaodPDFMain,
  downlaodPDFMainToc,
} from "../../Utils/Request/Method";

type DownloadMenuBody = { id: string };
const Pdf1DownloadMenu = ({ id }: DownloadMenuBody) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Download Full Itinerary",
      onClick: () => {
        downlaodPDFMain(id);
      },
    },

    {
      key: "2",
      label: "Download Short Itinerary",
      onClick: () => {
        downlaodPDFMainToc(id);
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
    </>
  );
};

export default Pdf1DownloadMenu;
