import React from "react";
import Introduction from "../../components/Introduction/Introduction";
import UploadPic from "../../components/UploadPic/UploadPic";
import "./Style3.css";
function StudentDetailPage() {
  return (
    <div>
      <div className="py-5 body-height">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <UploadPic />{" "}
            </div>
            <div className="col-lg-7">
              {" "}
              <Introduction />
            </div>
            <div className="col-lg-3 "> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
