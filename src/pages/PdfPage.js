import React from "react";
import MyDocument from "../sections//PdfSection/Pdf";

// import Download from"../sections/PdfSection/Pdf";

import { PDFDownloadLink } from "@react-pdf/renderer";

// import ReactDOM from "react-dom";
// import { render } from "@testing-library/react";

const PdfPage = () => {
  return (
    // <MyDocument/>
    <div className="PdfPage">
      <PDFDownloadLink document={<MyDocument />} filename="purvi.pdf">
        {({ blob, url, loading, error }) => {
          // console.log("dfkjdkfjkdf", blob, url, loading, error);
          return loading ? "Loading document..." : "Download now!";
        }}
      </PDFDownloadLink>
      <MyDocument />
    </div>
  );
};

export default PdfPage;
