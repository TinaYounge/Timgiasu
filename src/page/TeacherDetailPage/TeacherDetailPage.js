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

function TeacherDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  const singleTeacherInfo1 = useSelector((state) => state.singleUserInfo.user);
  console.log("thu day xem", singleTeacherInfo1);
  const singleTeacherInfo = singleTeacherInfo1;
  return singleTeacherInfo[id] ? (
    <div>
      <div className="py-5 bg-light">
        <div className=" px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <Profile
                singleTeacherInfoAll={{
                  singleTeacherInfo: singleTeacherInfo[id],
                  id,
                }}
              />
            </div>
            <div className="col-lg-6">
              <Introduction singleTeacherInfo={singleTeacherInfo[id]} />
              <ModalTim />
            </div>
            <div className="col-lg-4">
              <SubjectAcc ClassesTeacherInfo={singleTeacherInfo[id].classes} />
            </div>
            <div className="col-lg-8">
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>khong co</div>
  );
}

export default TeacherDetailPage;
