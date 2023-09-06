import { Button, Input } from "antd";
import { GrRefresh } from "react-icons/Gr";
import {
  getAllPdf1,
  searchByIdPdf1,
  searchByNamePdf1,
  searchByTitlePdf1,
} from "../../Service/Pdf1List/Pdf1ListApi";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";

const { Search } = Input;
type ButtonType = {
  setData: (data: PDF1List[]) => void;
};
const Pdf1SearchBtn = ({ setData }: ButtonType) => {
  const mapData = (res: any): void => {
    setData(
      res.data.map((pdf1: PDF1) => ({
        key: pdf1.id,
        ...pdf1,
      }))
    );
  };
  return (
    <div
      style={{
        background: "#EBE3E3",
        paddingTop: 7,
        paddingBottom: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "55px",
      }}
    >
      {/* <Space style={{ display: "flex", width: "100%" }}> */}
      <label style={{ marginRight: 5 }}>All</label>
      <Button
        type="primary"
        style={{ marginRight: 10 }}
        shape="circle"
        icon={<GrRefresh />}
        onClick={(e) => {
          getAllPdf1().then((res) => {
            mapData(res);
          });
        }}
      />

      <Search
        placeholder="Search By Id"
        onSearch={(a) => {
          searchByIdPdf1(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "20%", marginRight: 5 }}
        onChange={(e) => {}}
      />
      <Search
        placeholder="Search By Name"
        onSearch={(a) => {
          searchByNamePdf1(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%" }}
        onChange={(e) => {
          //   setActiveUrl(titleApi + e.target.value);
        }}
      />

      <Search
        placeholder="Search By Title"
        onSearch={(a) => {
          searchByTitlePdf1(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%" }}
        onChange={(e) => {}}
      />
      {/* </Space> */}
    </div>
  );
};
export default Pdf1SearchBtn;
