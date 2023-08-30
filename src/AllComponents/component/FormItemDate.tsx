import { DatePicker, Form, Input, InputNumber } from "antd";

type Props = {
  name: string;
  label: string;
  message?: string;
  validation?: boolean;
};

const FormItemDate = ({
  name,
  label,
  message = "Required!",
  validation = true,
}: Props) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: validation,
          message: message,
        },
      ]}
    >
      <DatePicker style={{ width: "100%" }} />
    </Form.Item>
  );
};

export default FormItemDate;
