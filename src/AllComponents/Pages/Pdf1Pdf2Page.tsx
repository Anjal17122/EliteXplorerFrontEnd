import { useParams } from "react-router-dom";
import NavDetail from "../Pdf1FullDetail/NavDetail";
import { useEffect } from "react";
import { getPdf1ById } from "../../Service/Pdf1List/Pdf1ListApi";

const Pdf1Pdf2Page = () => {
  const { id } = useParams();
  useEffect(() => {
    getPdf1ById(id == undefined ? "0" : id).then((res) => {
      console.log(res.data);
      // setResult(res.data);
    });
  }, []);
  return (
    <div style={{ height: "200vh" }}>
      {" "}
      <NavDetail pdf1Id={id === undefined ? "0" : id} />
    </div>
  );
};
export default Pdf1Pdf2Page;
