import { Descriptions } from "antd";
import { PDF1 } from "../../Service/SaveToc/TocType";
type descriptionData = { pdf1: PDF1 };
const FullDetailDescription = ({ pdf1 }: descriptionData) => {
  return (
    <Descriptions title={pdf1.preparedTo}>
      {/* <Descriptions.Item label="Trip Title">{pdf1.title}</Descriptions.Item> */}
      {/* <Descriptions.Item label="Total Amount">{pdf1.total}</Descriptions.Item> */}
      <Descriptions.Item label="Amount">
        {pdf1.totalWithoutExtra}
      </Descriptions.Item>

      <Descriptions.Item label="Precsion Error Amount">
        {pdf1.totalAmountPrecisionError}
      </Descriptions.Item>

      {/* <Descriptions.Item label="Total Days">{pdf1.totalDays}</Descriptions.Item> */}
      {/* <Descriptions.Item label="Start Date">{pdf1.startDate}</Descriptions.Item> */}
      <Descriptions.Item label="Adults">{pdf1.noOfAdults}</Descriptions.Item>

      <Descriptions.Item label="Adults Amount">
        {pdf1.amountPerAdult}
      </Descriptions.Item>
      <Descriptions.Item label="Children">
        {pdf1.noOfChildren}
      </Descriptions.Item>
      <Descriptions.Item label="Children Amount">
        {pdf1.amountPerChildren}
      </Descriptions.Item>

      <Descriptions.Item label="Buffer">
        {(pdf1.buffer / 100) * pdf1.totalWithoutExtra}
        {"(" + pdf1.buffer + "%)"}
      </Descriptions.Item>
      <Descriptions.Item label="Margin">
        {(pdf1.margin / 100) *
          (pdf1.totalWithoutExtra +
            (pdf1.buffer / 100) * pdf1.totalWithoutExtra)}
        {"(" + pdf1.margin + "%)"}
      </Descriptions.Item>
      <Descriptions.Item label="Tax">
        {(pdf1.tax / 100) *
          (pdf1.totalWithoutExtra +
            (pdf1.margin / 100) * pdf1.totalWithoutExtra +
            (pdf1.buffer / 100) * pdf1.totalWithoutExtra)}
        {"(" + pdf1.tax + "%)"}
      </Descriptions.Item>
      <Descriptions.Item label="Total Amount">{pdf1.total}</Descriptions.Item>
    </Descriptions>
  );
};

export default FullDetailDescription;
