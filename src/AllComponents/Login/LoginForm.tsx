import { Col, Form, Row } from "antd";
import PasswordFormItem from "../component/PasswordFormItem";
import FormItem from "../component/FormItem";
import { SubmitBtn } from "../component/SubmitBtn";
import { useForm } from "antd/es/form/Form";

const LoginForm = () => {
  const [form] = useForm();

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
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <FormItem name={"username"} label={"Username"} />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12} md={12} lg={12} sm={24} xs={24}>
          <PasswordFormItem name={"password"} label="Password" />
        </Col>
      </Row>
      <Row>
        <Col span={12} md={12} lg={24} sm={24} xs={24}>
          <SubmitBtn text="Login User" />
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
