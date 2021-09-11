import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
import Pricebox from "../../components/Pricebox/Pricebox";
import Profile from "../../components/Profile/Profile";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";

function TeacherDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  const singleTeacherInfo = useSelector((state) => state.singleUserInfo.user);
  return (
    <div>
      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <Profile singleTeacherInfo={singleTeacherInfo} />
            </div>
            <div className="col-lg-7">
              {" "}
              <Introduction singleTeacherInfo={singleTeacherInfo} />
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
