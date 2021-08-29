import React from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
import Pricebox from "../../components/Pricebox/Pricebox";
import Profile from "../../components/Profile/Profile";

function TeacherDetailPage() {
  return (
    <div>
      <div className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <Profile />
            </div>
            <div className="col-lg-7">
              {" "}
              <Introduction />
              <CommentBox />
            </div>
            <div className="col-lg-3 ">
              {" "}
              <Pricebox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetailPage;
