import { useEffect } from "react";
import { Button, Form, Input } from "antd";
import {
  getSettingTypeValue,
  saveSettingType,
} from "../../Service/PdfSetting/Api";
import { SettingType } from "../../Service/PdfSetting/SettingType";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const PdfSettingForm = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    getSettingTypeValue("InclusionWordCount").then((res) => {
      console.log(res.data);
      form.setFieldsValue({ value: res.data.value });
    });
  }, []);

  const onFinish = (values: SettingType) => {
    const body: SettingType = {
      ...values,
      setting: "InclusionWordCount",
    };
    saveSettingType(body).then((res) => {
      form.setFieldsValue({ value: res.data.value });
      //   console.log(res.data);
    });
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Inclusion Word Count"
        name="value"
        rules={[{ required: true, message: "Please Enter Your value" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PdfSettingForm;
