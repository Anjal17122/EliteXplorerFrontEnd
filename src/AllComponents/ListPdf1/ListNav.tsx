import React, { useEffect, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { GET_REQUEST } from "../../Utils/Request/Method";
import { mapCategory } from "../CategorySearch/helper";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { getAllPdf1, getByCategory } from "../../Service/Pdf1List/Pdf1ListApi";
// import "./NavComponent.css";
// React.FC

type navType = {
  setData: (curren: PDF1List[]) => void;
};
const ListNav = ({ setData }: navType) => {
  const items: MenuProps["items"] = [
    {
      label: "All",
      key: "All",
      icon: <SettingOutlined />,
    },
  ];
  const [menuList, setMenuList] = useState(items);

  useEffect(() => {
    GET_REQUEST("/category").then((res) => {
      console.log({ res });
      const combinedList: MenuProps["items"] = [
        ...items,
        ...mapCategory(res.data),
      ];
      setMenuList(combinedList);
      getAllPdf1().then((res) => {
        const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
          key: pdf1.id,
          ...pdf1,
        }));
        setData(pdf1ListArray);
      });
    });
  }, []);
  const [current, setCurrent] = useState("All");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);

    setCurrent(e.key);

    if (e.key == "All") {
      getAllPdf1().then((res) => {
        const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
          key: pdf1.id,
          ...pdf1,
        }));
        setData(pdf1ListArray);
      });
    } else {
      getByCategory(e.key).then((res) => {
        const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
          key: pdf1.id,
          ...pdf1,
        }));
        setData(pdf1ListArray);
      });
    }
    // currentNav(e.key);
    // urlChange("/pdf2/sub/category?id=" + e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuList}
      className="menu"
    />
  );
};

export default ListNav;
