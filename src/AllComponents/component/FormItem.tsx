import { Form, Input } from "antd";

type Props = {
  name: string;
  label: string;
  message?: string;
  validation?: boolean;
};

const FormItem = ({
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
      <Input />
    </Form.Item>
  );
};

export default FormItem;
