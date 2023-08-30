import React, { useEffect, useState } from "react";
import { Radio, Tabs } from "antd";
import { getPdf1Pdf2ByPdf1Id } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import SaveDetailPdf2Form from "./SaveDetailPdf2Form";
import { Pdf1Pdf2Type } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";

type TabPosition = "left" | "right" | "top" | "bottom";
type idDetail = { pdf1Id: string };
const NavDetail = ({ pdf1Id }: idDetail) => {
  const [data, setData] = useState<Pdf1Pdf2Type[]>([]);
  const [navLoad, setNavLoad] = useState<Pdf1Pdf2Type>();

  useEffect(() => {
    getPdf1Pdf2ByPdf1Id(pdf1Id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [navLoad]);
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition={"top"}
        style={{ height: 220 }}
        items={data.map((i) => {
          const day = String(i.day);
          return {
            label: `Day-${day}`,
            key: day,
            children: (
              <SaveDetailPdf2Form
                pdf1Pdf2Id={i.id}
                pdf2Id={i.pdf2Id}
                pdf1Id={i.pdf1Id}
                reloadNav={setNavLoad}
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default NavDetail;
