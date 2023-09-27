import { useEffect, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { GET_REQUEST } from "../../Utils/Request/Method";
import { mapCategory } from "./helper";
import "./NavComponent.css";
import { useGlobalState } from "../../GlobalState/GloabalStates";
// React.FC

type navType = {
  currentNav: (curren: string) => void;
  urlChange: (url: any) => void;
};
const NavComponent = ({ currentNav, urlChange }: navType) => {
  const [refreshPost, setRefreshPost] = useGlobalState("refreshPost");
  const items: MenuProps["items"] = [
    {
      label: "No Items Loaded",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },
      ],
    },
  ];
  const [menuList, setMenuList] = useState(items);

  useEffect(() => {
    GET_REQUEST("/category").then((res) => {
      console.log({ res });
      setMenuList(mapCategory(res.data));
    });
  }, []);
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    currentNav(e.key);
    setRefreshPost(true);
    urlChange("/pdf2/sub/category?id=" + e.key);
    console.log(refreshPost);
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

export default NavComponent;
