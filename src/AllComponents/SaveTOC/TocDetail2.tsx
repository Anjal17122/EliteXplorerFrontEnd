import { Col, Form, Row } from "antd";
import { useEffect } from "react";
import FormItem from "../component/FormItem";
import { Pdf1TocData } from "../../Service/SaveToc/TocType";
import { savePdfToc2 } from "../../Service/SaveToc/TocApi";
import { SubmitBtn } from "../component/SubmitBtn";

type fillData = {
  data: Pdf1TocData;
  tabledataload: boolean;
  setTableDataLoad: (fromData: boolean) => void;
};
const TocDetail2 = ({ data }: fillData) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);

  const onFinish = (w: Pdf1TocData) => {
    const abc = {
      ...w,
      id: data.id,
      pdf1Toc: data.pdf1Toc,
    };
    savePdfToc2(abc);
  };

  return (
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
        <Col span={8} md={8} lg={8} sm={12} xs={12}>
          <FormItem name={"title"} label="Title" />
        </Col>
        <Col span={8} md={8} lg={8} sm={12} xs={12}>
          <FormItem name={"subTitle"} label="Sub Title" />
        </Col>
        <Col span={8} md={8} lg={8} sm={12} xs={12}>
          <FormItem name={"day"} label="Day" />
        </Col>
      </Row>
      <SubmitBtn />
    </Form>
  );
};

export default TocDetail2;
