import { Cascader, Col, Form, Input, Row, message } from "antd";
import ImageUpload from "../SavePdf2/ImageUpload";
import FormItem from "../component/FormItem";
import { SubmitBtn } from "../component/SubmitBtn";
import { useState, useEffect } from "react";
import { PDF1 } from "../../Service/SaveToc/TocType";
import FormItemDate from "../component/FormItemDate";
import FormItemNumber from "../component/FormItemNumber";
import { useQuery } from "@tanstack/react-query";
import { cascaderOption } from "../../Service/SavePdf2/Pdf2Type";
import { getAllCategory } from "../../Service/SavePdf2/Pdf2Api";
import { mapCascadeCategory } from "../../Service/SavePdf2/Pdf2Mapper";

type tocDetail1 = {
  result: PDF1 | undefined;
  onFormSave: (fromData: PDF1) => void;
};
const TocDetail1 = ({ result, onFormSave }: tocDetail1) => {
  const [image1S, setImage1] = useState<string>();
  const [form] = Form.useForm();

  const tourCategory = useQuery<cascaderOption[], { message: string }>({
    queryKey: ["category"],
    queryFn: () => getAllCategory().then((res) => mapCascadeCategory(res.data)),
  });

  useEffect(() => {
    form.setFieldsValue(result);
    setImage1(result === undefined ? "null" : result.file);
  }, [result]);

  const onFinish = (w: PDF1) => {
    if (image1S === undefined) {
      message.error("Please upload Image1");
      return;
    }

    const abc = {
      ...w,
      file: image1S,
      subCategoryId: Array.isArray(w.subCategoryId)
        ? w.subCategoryId[1]
        : w.subCategoryId,
    };
    onFormSave(abc);
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
        <Col span={12} md={12} lg={12} sm={24} xs={24} push={9}>
          <ImageUpload filename={image1S} imageName={setImage1} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"title"} label={"Itinerary Title"} />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"preparedTo"} label={"Prepared To"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItemDate name={"startDate"} label="Start Date" />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItemNumber name={"totalDays"} label="Total Days" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={5} md={5} lg={5} sm={12} xs={12}>
          <FormItemNumber name={"noOfAdults"} label="No Of Adults" />
        </Col>
        <Col span={5} md={5} lg={5} sm={12} xs={12}>
          <FormItemNumber name={"amountPerAdult"} label="Adult Amount" />
        </Col>
        <Col span={5} md={5} lg={5} sm={12} xs={12}>
          <FormItemNumber name={"noOfChildren"} label="No Of Children" />
        </Col>
        <Col span={5} md={5} lg={5} sm={12} xs={12}>
          <FormItemNumber name={"amountPerChildren"} label="Children Amount" />
        </Col>
        <Col span={4} md={4} lg={4} sm={12} xs={12}>
          <FormItem name={"currency"} label="Currency" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <Form.Item
            label="Choose Category"
            rules={[
              {
                required: true,
                message: "Please Choose Category",
              },
            ]}
            name={"subCategoryId"}
          >
            <Cascader
              options={tourCategory.data ?? []}
              expandTrigger="hover"
              // displayRender={displayRender}
              // onChange={onChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <Form.Item
            label="Inclusion"
            name={"inclusion"}
            rules={[
              {
                required: true,
                message: "!Required",
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
        </Col>

        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <Form.Item
            label="Exclusion"
            name={"exclusion"}
            rules={[
              {
                required: true,
                message: "!Required",
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12} md={16} lg={16} sm={24} xs={24}>
          <Form.Item
            label="Front Page Description"
            name={"mainText"}
            rules={[
              {
                required: true,
                message: "!Required",
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <SubmitBtn />
        </Col>
      </Row>
    </Form>
  );
};

export default TocDetail1;
