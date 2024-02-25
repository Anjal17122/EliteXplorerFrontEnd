import { Form, Input } from "antd";

type Props = {
  name: string;
  label: string;
  message?: string;
  validation?: boolean;
};

const PasswordFormItem = ({
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
      <Input.Password />
    </Form.Item>
  );
};

export default PasswordFormItem;
