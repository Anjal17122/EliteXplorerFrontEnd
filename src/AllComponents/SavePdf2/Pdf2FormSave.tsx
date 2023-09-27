import { useEffect, useState } from "react";
import "./Pdf2FormSave.css";
import { Form, Input, Row, Col, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { cascaderOption, pdf2Body } from "../../Service/SavePdf2/Pdf2Type";
import { getAllCategory } from "../../Service/SavePdf2/Pdf2Api";
import { mapCascadeCategory } from "../../Service/SavePdf2/Pdf2Mapper";
import FormItem from "../component/FormItem";
import ImageUpload from "./ImageUpload";
import { SubmitBtn } from "../component/SubmitBtn";

type manageData = {
  result: pdf2Body | undefined;
  onFormSave: (fromData: pdf2Body) => void;
  isFullDetail?: false | boolean;
};

const Pdf2FormSave = ({ result, onFormSave }: manageData) => {
  const [image1S, setImage1] = useState<string>();
  const [image2S, setImage2] = useState<string>();
  const [form] = Form.useForm();

  useQuery<cascaderOption[], { message: string }>({
    queryKey: ["category"],
    queryFn: () => getAllCategory().then((res) => mapCascadeCategory(res.data)),
  });

  useEffect(() => {
    form.setFieldsValue(result);
    setImage1(result === undefined ? "null" : result.image1);
    setImage2(result === undefined ? "null" : result.image2);
  }, [result]);

  const onFinish = (w: pdf2Body) => {
    if (image1S === undefined) {
      message.error("Please upload Image1");
      return;
    }
    if (image2S === undefined) {
      message.error("Please upload Image2");
      return;
    }
    const abc = {
      ...w,
      image1: image1S,
      image2: image2S,
      // subCategoryId: Array.isArray(w.subCategoryId)
      //   ? w.subCategoryId[1]
      //   : w.subCategoryId,
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
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          {/* <ImageUpload /> */}
          <ImageUpload filename={image2S} imageName={setImage2} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"title"} label={"Title"} />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"subTitle"} label="Day and Movement" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"hotel"} label="Hotel" />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"food"} label="Food" />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"room"} label="Room Type" />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"website"} label="Website Link" />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem
            name={"tocTitle"}
            label="Short Itinerary Title"
            validation={false}
          />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem
            name={"tocSubTitle"}
            label="Short Itinerary Detail"
            validation={false}
          />
        </Col>
      </Row>
      {/* 
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
        {/* <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name="hint" label="Hint" />
          </Col>  </Row> */}

      <Row gutter={[16, 16]}>
        <Col span={12} md={16} lg={16} sm={24} xs={24}>
          <Form.Item
            label="Day Description"
            name={"text"}
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

export default Pdf2FormSave;
