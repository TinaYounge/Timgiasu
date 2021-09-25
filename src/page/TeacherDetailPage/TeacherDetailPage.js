import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
import ModalTim from "../../components/Modal/Modal";
import Profile from "../../components/Profile/Profile";
import SubjectAcc from "../../components/SubjectAcc/SubjectAcc";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";
import "./Style.css";
function TeacherDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  const singleTeacherInfo1 = useSelector((state) => state.singleUserInfo.user);
  const singleTeacherInfo = singleTeacherInfo1;
  return singleTeacherInfo[id] ? (
    <div>
      <div className="py-5 bg-light teacherBg ">
        <div className=" px-5 my-5 ">
          <div className="row gx-5  ">
            <div
              className="col-lg-2 box"
              style={{ paddingBottom: "15px", color: "black" }}
            >
              <Profile
                singleTeacherInfoAll={{
                  singleTeacherInfo: singleTeacherInfo[id],
                  id,
                }}
              />
              <div className="row">
                <div className="btn-grad  col" style={{ padding: "5px" }}>
                  Follow
                </div>
                <div className="btn-grad col" style={{ padding: "5px" }}>
                  Unfollow
                </div>
              </div>
            </div>
            <div className="col-lg-6  ">
              <Introduction singleTeacherInfo={singleTeacherInfo[id]} />
              <ModalTim singleTeacherInfo={singleTeacherInfo[id]} />
            </div>

            <div className="col-lg-4 ">
              <SubjectAcc ClassesTeacherInfo={singleTeacherInfo[id].classes} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 " style={{ marginTop: "15px" }}>
        <CommentBox />
      </div>
    </div>
  ) : (
    <div>khong co</div>
  );
}

export default TeacherDetailPage;
