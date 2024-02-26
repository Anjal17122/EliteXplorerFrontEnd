import { Col, Form, Row } from "antd";
import PasswordFormItem from "../component/PasswordFormItem";
import FormItem from "../component/FormItem";
import { SubmitBtn } from "../component/SubmitBtn";
import { useForm } from "antd/es/form/Form";
import {
  LoginType,
  LoginTypeSuccess,
} from "../../Service/LoginManager/LoginBody";
import { loignUserApi } from "../../Service/LoginManager/LoginApi";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { localStorageLoginSuccess } from "../../Utils/Request/LocalStorageConstant";

const LoginForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const onFinish = (loginData: LoginType) => {
    loignUserApi(loginData).then((res: LoginTypeSuccess) => {
      if (res.success) {
        localStorage.setItem(localStorageLoginSuccess, JSON.stringify(res));
        navigate(`${AllUrls.urlHomePage}`);
      }
    });
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
      <Row>
        <Col span={24} md={24} lg={24} sm={24} xs={24}>
          <FormItem
            name={"username"}
            label={"Username"}
            message="Please input username!"
          />
        </Col>
      </Row>

      <Row>
        <Col span={24} md={24} lg={24} sm={24} xs={24}>
          <PasswordFormItem
            name={"password"}
            label="Password"
            message="Please input password!"
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} md={12} lg={24} sm={24} xs={24}>
          <SubmitBtn text="Log In" width={"100%"} />
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
