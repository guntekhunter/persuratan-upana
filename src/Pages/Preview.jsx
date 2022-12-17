import React, { useState } from "react";
import { Document, Page, page } from "react-pdf/dist/esm/entry.webpack";

export default function Preview() {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPage }) => {
    setNumPages(numPage);
    setPageNumber(1);
  };

  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };

  return (
    <div className="bg-[#F7F7F7]">
      <center>
        <Document file="/cover letter.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
      </center>
      {/* <center>
        <div>
          <Document
            file="/ommaleka.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
                new Array(numPage), 
                (el,index) =>(
                    <Page key={`page_${index+1}`}
                    pageNumber={index-1}/>
                )
            )}
          </Document>
        </div>
      </center> */}
    </div>
  );
}
