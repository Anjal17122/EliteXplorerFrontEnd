import { Button, Form } from "antd";
import { useStoreGlobal } from "../../GlobalState/GloabalStates";

type Props = {
  text?: string;
  width?: "auto" | number;
  style?: object;
};

export function SubmitBtn({ width = "auto", text = "Submit", style }: Props) {
  const { disabled } = useStoreGlobal();
  return (
    <Form.Item style={{ ...style }}>
      <Button
        htmlType="submit"
        type="primary"
        loading={disabled}
        style={{ width: width }}
      >
        {text}
      </Button>
    </Form.Item>
  );
}
