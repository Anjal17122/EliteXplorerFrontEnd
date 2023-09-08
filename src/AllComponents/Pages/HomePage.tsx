import { useState } from "react";
import CategoryListFinal from "../CategorySearch/CategoryListFinal";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const HomePage = () => {
  const [buttonState, setButtonState] = useState(true);
  const [pdf2Id, setPdf2Id] = useState("0");

  const selectedItemId = (idPdf2: string) => {
    setPdf2Id(idPdf2);
    setButtonState(false);
  };
  return (
    <>
      <div>
        <Link to={AllUrls.urlUpdatePdfPage_ + `/${pdf2Id}`}>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            style={{ marginBottom: "5px" }}
            disabled={buttonState}
          >
            Update
          </Button>
        </Link>
      </div>
      <CategoryListFinal selectedItemId={selectedItemId} />
    </>
  );
};

export default HomePage;
