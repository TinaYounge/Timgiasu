import React from "react";
import { useParams } from "react-router";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
import Pricebox from "../../components/Pricebox/Pricebox";
import Profile from "../../components/Profile/Profile";

function TeacherDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <Profile id={id} />
            </div>
            <div className="col-lg-7">
              {" "}
              <Introduction id={id} />
              <CommentBox id={id} />
            </div>
            <div className="col-lg-3 ">
              {" "}
              <Pricebox id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetailPage;
