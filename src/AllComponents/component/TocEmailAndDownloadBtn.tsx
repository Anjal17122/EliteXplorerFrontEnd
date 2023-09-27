import { DownloadOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { downloadpdfTOC } from "../../Utils/Request/Method";
import { useState } from "react";
import TocSendEmailModal from "../ListToc/TocSendEmailModal";

type emailAndDownloadBtnBody = { id: string };
const TocEmailAndDownloadBtn = ({ id }: emailAndDownloadBtnBody) => {
  const [modalOpen, setModalOpen] = useState(false);
  const downloadPdf = () => {
    downloadpdfTOC(id);
  };

  const sendEmail = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={4} md={4} lg={4} sm={24} xs={24} push={16}>
          <Button
            type="primary"
            shape="round"
            value={id}
            icon={<DownloadOutlined />}
            size={"large"}
            onClick={downloadPdf}
          >
            Download
          </Button>
        </Col>
        <Col span={4} md={4} lg={4} sm={24} xs={24} push={16}>
          <Button
            type="primary"
            shape="round"
            value={id}
            icon={<MailOutlined />}
            size={"large"}
            onClick={sendEmail}
          >
            Send Email
          </Button>
        </Col>
      </Row>
      <TocSendEmailModal setOpen={setModalOpen} open={modalOpen} pdf1Id={id} />
    </>
  );
};

export default TocEmailAndDownloadBtn;
