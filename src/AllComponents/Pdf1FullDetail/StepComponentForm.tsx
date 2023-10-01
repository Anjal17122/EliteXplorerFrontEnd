import { Col, Form, Row } from "antd";
import FormItem from "../component/FormItem";
import { SubmitBtn } from "../component/SubmitBtn";
import { PricingTemplateInterface } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";
import { useEffect } from "react";
import { pdf1pdf2PricingSave } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";

type formType = {
  titleInputName: string;
  priceInputName: string;
  data: PricingTemplateInterface | undefined;
  pdf1pdf2Id: string;
  pdf1Id: string;
};
const StepsComponentForm = ({
  titleInputName,
  priceInputName,
  data,
  pdf1pdf2Id,
  pdf1Id,
}: formType) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);

  const onFinish = (w: PricingTemplateInterface) => {
    const final: PricingTemplateInterface = {
      ...w,
      pdf1Pdf2Id: parseInt(pdf1pdf2Id),
      pdf1Id: parseInt(pdf1Id),
    };
    pdf1pdf2PricingSave(final);
  };

  return (
    <>
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
            <FormItem name={titleInputName} label={"Name"} />
          </Col>
          <Col span={12} md={12} lg={12} sm={24} xs={24}>
            <FormItem name={priceInputName} label="Amount" />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24} md={24} lg={24} sm={24} xs={24}>
            <SubmitBtn />
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default StepsComponentForm;
