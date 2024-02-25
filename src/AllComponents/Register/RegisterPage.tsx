import { Col, Form, Row, message } from "antd";
import FormItem from "../component/FormItem";
import { useEffect, useState } from "react";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import RoundImageUpload from "../component/RoundImageUplaod";
import PasswordFormItem from "../component/PasswordFormItem";
import { SubmitBtn } from "../component/SubmitBtn";

type registerType = {
  userBody: UserType | undefined;
  onRegistrationSave: (fromData: UserType) => void;
};
const SaveRegister = ({ userBody, onRegistrationSave }: registerType) => {
  const [form] = Form.useForm();
  const [image1S, setImage1] = useState<string>();

  useEffect(() => {
    form.setFieldsValue(userBody);
    setImage1(userBody === undefined ? "null" : userBody.filename);
  }, [userBody]);

  const onFinish = (w: UserType) => {
    if (image1S === undefined) {
      message.error("Please upload Your Image");
      return;
    }
    const abc = {
      ...w,
      filename: image1S,
    };

    onRegistrationSave(abc);
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
        <Col span={24} md={24} lg={24} sm={24} xs={24}>
          <RoundImageUpload filename={image1S} imageName={setImage1} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"fullName"} label={"Full Name"} />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"email"} label="Email" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"phoneNo"} label={"Phone No."} />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"specialization"} label="Specialization" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"username"} label={"Username"} />
        </Col>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <PasswordFormItem name={"password"} label="Password" />
        </Col>
      </Row>
      <Row>
        <Col span={12} md={12} lg={24} sm={24} xs={24}>
          <SubmitBtn text="Register User" />
        </Col>
      </Row>
    </Form>
  );
};

export default SaveRegister;
