import React from "react";
import { Form, InputNumber } from "antd";

type Props = {
  name: string;
  label: string;
  message?: string;
  validation?: boolean;
};

const FormItemNumber = ({
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
      <InputNumber style={{ width: "100%" }} />
    </Form.Item>
  );
};

export default FormItemNumber;
