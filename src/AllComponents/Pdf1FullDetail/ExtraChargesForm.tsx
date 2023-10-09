import { Button, Col, Form, Row } from "antd";
import { SubmitBtn } from "../component/SubmitBtn";
import FormItem from "../component/FormItem";
import { PDF1 } from "../../Service/SaveToc/TocType";
import { updatePricingPdf1 } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import { useEffect, useState } from "react";
import { getPdf1ById } from "../../Service/Pdf1List/Pdf1ListApi";
import Pdf1AllDetailsModal from "./Pdf1AllDetailsModal";

type ExtraChargeType = { pdf1Id: string };
const ExtraChargesForm = ({ pdf1Id }: ExtraChargeType) => {
  const [form] = Form.useForm();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getPdf1ById(pdf1Id).then((res) => {
      form.setFieldsValue(res.data);
    });
  }, []);

  const onFinish = (w: PDF1) => {
    const abc: PDF1 = {
      ...w,
      id: parseInt(pdf1Id),
      // subCategoryId: Array.isArray(w.subCategoryId)
      //   ? w.subCategoryId[1]
      //   : w.subCategoryId,
    };
    updatePricingPdf1(abc).then((res) => {
      form.setFieldsValue(res.data);
    });
    console.log(w);
  };

  return (
    <>
      <Pdf1AllDetailsModal
        modelOpen={modalOpen}
        setModelOpen={setModalOpen}
        pdf1Id={pdf1Id}
      />
      <Button style={{ float: "right" }} onClick={() => setModalOpen(true)}>
        Pricing Details
      </Button>
      <Form
        form={form}
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 30 }}
        layout="vertical"
        size="large"
        style={{ width: "100%" }}
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          <Col span={12} md={12} lg={12} sm={24} xs={24}>
            <FormItem name={"tax"} label="Tax" />
          </Col>
          <Col span={12} md={12} lg={12} sm={24} xs={24}>
            <FormItem name={"buffer"} label="Buffer" />
          </Col>
          <Col span={12} md={12} lg={12} sm={24} xs={24}>
            <FormItem name={"margin"} label="Margin" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12} md={16} lg={16} sm={24} xs={24}>
            <SubmitBtn />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ExtraChargesForm;
