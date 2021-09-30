import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CommentBox from "../../components/CommentBox/CommentBox";
import Introduction from "../../components/Introduction/Introduction";
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
              className="col-lg-3 "
              style={{ paddingBottom: "15px", color: "black" }}
            >
              <div className="box" style={{ padding: "35px" }}>
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
            </div>
            <div className="col-lg-5 box ">
              <Introduction singleTeacherInfo={singleTeacherInfo[id]} />
              <CommentBox singleTeacherInfo={singleTeacherInfo[id]} />
            </div>

            <div className="col-lg-4  ">
              <SubjectAcc ClassesTeacherInfo={singleTeacherInfo[id].classes} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 " style={{ marginTop: "15px" }}></div>
    </div>
  ) : (
    <div style={{ minHeight: "80vh" }}>
      <br />
      <center>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </center>
    </div>
  );
}

export default TeacherDetailPage;
