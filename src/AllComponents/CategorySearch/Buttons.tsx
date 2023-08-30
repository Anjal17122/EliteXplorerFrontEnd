import { Button, Input } from "antd";
import { useState, useEffect } from "react";
import { GrRefresh } from "react-icons/Gr";
import { useGlobalState } from "../../GlobalState/GloabalStates";

const { Search } = Input;
type ButtonType = {
  id: string;
  urlChange: (url: any) => void;
};
const Buttons = ({ id, urlChange }: ButtonType) => {
  const [refreshPost, setRefreshPost] = useGlobalState("refreshPost");
  const subCategoryApi = `/pdf2/sub/category?id=${id}`;
  const categoryApi = `/pdf2/category?id=${id}`;
  let titleApi = `/pdf2/sub/category/title?id=${id}&title=`;
  let idApi = `/pdf2/sub/category/by/id?subCategoryId=${id}&id=`;

  const [activeUrl, setActiveUrl] = useState(subCategoryApi);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      urlChange(activeUrl);
      setRefreshPost(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [activeUrl]);

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
          setActiveUrl(categoryApi);
        }}
      />

      {/* <Space style={{ display: "flex", width: "100%" }}> */}
      <label style={{ marginRight: 5 }}>Sub Category</label>
      <Button
        type="primary"
        style={{ marginRight: 5 }}
        shape="circle"
        icon={<GrRefresh />}
        onClick={(e) => {
          setActiveUrl(subCategoryApi);
        }}
      />

      <Search
        placeholder="Search By Id"
        onSearch={(a) => {}}
        enterButton
        style={{ width: "30%", marginRight: 5 }}
        onChange={(e) => {
          setActiveUrl(idApi + e.target.value);
        }}
      />

      <Search
        placeholder="Search By Name"
        onSearch={(a) => {}}
        enterButton
        style={{ width: "30%" }}
        onChange={(e) => {
          setActiveUrl(titleApi + e.target.value);
        }}
      />
      {/* </Space> */}
    </div>
  );
};
export default Buttons;
