import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Radio, Row } from "antd";
import FormItem from "../component/FormItem";
import { PdfType, sendEmailType } from "../../Service/SaveToc/TocType";
import { sendEmail } from "../../Utils/Request/Method";

type modalBody = {
  pdf1Id: string;
  open: boolean;
  setOpen: (modalState: boolean) => void;
};
const TocSendEmailModal = ({ pdf1Id, open, setOpen }: modalBody) => {
  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    const formValues: sendEmailType = form.getFieldsValue();
    const finalValue: sendEmailType = {
      ...formValues,
      pdfId: pdf1Id,
      pdfType: PdfType.tocitinerary,
    };
    sendEmail(finalValue).then((res) => {
      setConfirmLoading(false);
      form.resetFields();
      setOpen(false);
    });
    console.log(finalValue);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        centered
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 30 }}
          layout="vertical"
          size="large"
          style={{ width: "100%" }}
        >
          <Row gutter={[16, 16]}>
            <Col span={20} md={20} lg={20} sm={12} xs={12}>
              <Form.Item
                label="Receivers Email"
                name="emailTo"
                rules={[
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                  {
                    required: true,
                    message: "Email is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={23} md={23} lg={23} sm={12} xs={12}>
              <FormItem name={"subject"} label="Subject" />
            </Col>
          </Row>
          <Row>
            <Col span={24} md={24} lg={24} sm={24} xs={24}>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default TocSendEmailModal;
