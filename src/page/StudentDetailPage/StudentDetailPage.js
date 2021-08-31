import React from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
import Pricebox from "../../components/Pricebox/Pricebox";
import Profile from "../../components/Profile/Profile";
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
