import { Button, Input } from "antd";
import { GrRefresh } from "react-icons/Gr";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import {
  getAllTocPdf,
  searchByIdTOc,
  searchByNameTOc,
  searchByTitleToc,
} from "../../Service/SaveToc/TocApi";

const { Search } = Input;
type ButtonType = {
  setData: (data: PDF1List[]) => void;
};
const TocSearchBtn = ({ setData }: ButtonType) => {
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
        onClick={() => {
          getAllTocPdf().then((res) => {
            mapData(res);
          });
        }}
      />

      <Search
        placeholder="Search By Id"
        onSearch={(a) => {
          searchByIdTOc(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "20%", marginRight: 5 }}
        onChange={() => {}}
      />
      <Search
        placeholder="Search By Name"
        onSearch={(a) => {
          searchByNameTOc(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%" }}
        onChange={() => {
          //   setActiveUrl(titleApi + e.target.value);
        }}
      />

      <Search
        placeholder="Search By Title"
        onSearch={(a) => {
          searchByTitleToc(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%" }}
        onChange={() => {}}
      />
      {/* </Space> */}
    </div>
  );
};
export default TocSearchBtn;
