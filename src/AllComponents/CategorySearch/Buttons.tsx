import { Button, Input } from "antd";
import { useState, useEffect } from "react";
import { GrRefresh } from "react-icons/Gr";
import { useGlobalState } from "../../GlobalState/GloabalStates";
import { pdf2Body, pdf2BodyList } from "../../Service/SavePdf2/Pdf2Type";
import {
  searchPdf2All,
  searchPdf2ById,
  searchPdf2ByTitle,
} from "../../Service/Pdf2List/Pdf2ListApi";

const { Search } = Input;
type ButtonType = {
  setPdf2List: (url: pdf2BodyList[]) => void;
};
const Buttons = ({ setPdf2List }: ButtonType) => {
  const mapData = (res: any) => {
    const pdf2ListArray: pdf2BodyList[] = res.data.map((pdf2: pdf2Body) => ({
      key: pdf2.id,
      ...pdf2,
    }));
    setPdf2List(pdf2ListArray);
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
          searchPdf2All().then((res) => {
            mapData(res);
          });
        }}
      />

      <Search
        placeholder="Search By Id"
        onSearch={(a) => {
          searchPdf2ById(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%", marginRight: 5 }}
      />

      <Search
        placeholder="Search By Title"
        onSearch={(a) => {
          searchPdf2ByTitle(a).then((res) => {
            mapData(res);
          });
        }}
        enterButton
        style={{ width: "30%" }}
      />
      {/* </Space> */}
    </div>
  );
};
export default Buttons;
