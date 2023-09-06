import { DownloadOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import {
  checkMainDownloadable,
  downlaodPDFMain,
} from "../../Utils/Request/Method";
import { useState } from "react";
import Pdf1SendEmailModal from "../ListPdf1/Pdf1SendEmailModal";

type emailAndDownloadBtnBody = { id: string };
const EmailAndDownloadBtn = ({ id }: emailAndDownloadBtnBody) => {
  const [modalOpen, setModalOpen] = useState(false);
  const downloadPdf = () => {
    downlaodPDFMain(id === undefined ? "0" : id);
  };

  const sendEmail = () => {
    checkMainDownloadable(id).then((a) => {
      if (a == true) {
        setModalOpen(true);
      }
    });
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
      <Pdf1SendEmailModal setOpen={setModalOpen} open={modalOpen} pdf1Id={id} />
    </>
  );
};

export default EmailAndDownloadBtn;
