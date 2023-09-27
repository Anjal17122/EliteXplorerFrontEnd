import React from "react";
import { Button, message, Popconfirm } from "antd";
import { PDF1, PDF1List } from "../../Service/SaveToc/TocType";
import { deletePdf1, getAllPdf1 } from "../../Service/Pdf1List/Pdf1ListApi";

const cancel = (e: React.MouseEvent<HTMLElement> | undefined) => {
  console.log(e);
};
type deleteBody = {
  id: string;
  setData: (data: PDF1List[]) => void;
  setTableLoading: (data: boolean) => void;
};

const DeleteList = ({ id, setData, setTableLoading }: deleteBody) => {
  const confirm = () => {
    setTableLoading(true);
    deletePdf1(id).then(() => {
      getAllPdf1().then((res) => {
        const pdf1ListArray: PDF1List[] = res.data.map((pdf1: PDF1) => ({
          key: pdf1.id,
          ...pdf1,
        }));
        message.success("Deleted Succesfully");
        setTableLoading(false);
        setData(pdf1ListArray);
      });
    });
  };

  return (
    <Popconfirm
      title="Delete the task"
      placement="left"
      description="Are you sure to delete this Itinerary?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export default DeleteList;
