import "./App.css";
import Layout from "./AllComponents/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllUrls } from "./Utils/MyUrls/MyUrls";
import HomePage from "./AllComponents/Pages/HomePage";
import Pdf2FormUpdatePage from "./AllComponents/Pages/Pdf2FormUpdatePage";
import Pdf2FormSavePage from "./AllComponents/Pages/Pdf2FromSavePage";
import TocDetail1 from "./AllComponents/SaveTOC/TocDetail1";
import { PDF1 } from "./Service/SaveToc/TocType";
import TocDetailSave from "./AllComponents/Pages/TocDetailSave";
import TocDetailUpdatePage from "./AllComponents/Pages/TocDetailUpdatePage";
import TocListPage from "./AllComponents/Pages/TocListPage";
import MainPdfListPage from "./AllComponents/Pages/MainPdfLisPage";
import MainPdfSavePage from "./AllComponents/Pages/MainPdfSavePage";
import MainPdfUpdatePage from "./AllComponents/Pages/MainPdfUpdatePage";
import Pdf1Pdf2Page from "./AllComponents/Pages/Pdf1Pdf2Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>{LayoutPath}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const LayoutPath = (
  <>
    <Route path={AllUrls.urlHomePage} element={<HomePage />} />
    <Route
      path={AllUrls.urlUpdatePdfPage_ + "/:id"}
      element={<Pdf2FormUpdatePage />}
    />
    <Route path={AllUrls.urlSavePdf2Page} element={<Pdf2FormSavePage />} />
    <Route path={AllUrls.urlSaveTocPage} element={<TocDetailSave />} />
    <Route path={AllUrls.urlTocListPage} element={<TocListPage />} />

    <Route
      path={AllUrls.urlUpdateTocPage_ + "/:id"}
      element={<TocDetailUpdatePage />}
    />

    <Route path={AllUrls.urlMainPdfListPage} element={<MainPdfListPage />} />
    <Route path={AllUrls.urlMainSaveListPage} element={<MainPdfSavePage />} />

    <Route
      path={AllUrls.urlMainUpdateListPage_ + "/:id"}
      element={<MainPdfUpdatePage />}
    />
    <Route
      path={AllUrls.urlPdf1Pdf2DetailPage_ + "/:id"}
      element={<Pdf1Pdf2Page />}
    />

    <Route path={AllUrls.urlCheckPage} element={<h1>This is Check Page </h1>} />
  </>
);
