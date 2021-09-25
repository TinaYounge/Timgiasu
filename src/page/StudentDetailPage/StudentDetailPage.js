import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Introduction from "../../components/Introduction/Introduction";
import NotifyClass from "../../components/NotifyClass/NotifyClass";
import Profile from "../../components/Profile/Profile";
import TableToBookClass from "../../components/TableToBookClass/TableToBookClass";
import { getSingleStudent } from "../../redux/GetSingleStudent/GetSingleStudentAction";
import "./Style3.css";
function StudentDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleStudent(id));
  }, [dispatch, id]);
  const singleStudentInfo = useSelector(
    (state) => state.singleStudentInfo.student
  );
  console.log("singleStudentInfo", singleStudentInfo);
  return (
    <div>
      <div className="py-5 body-height studentBg">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2 ">
              <Profile
                singleTeacherInfoAll={{
                  singleTeacherInfo: singleStudentInfo,
                  id,
                }}
              />
            </div>
            <div className="col-lg-7 ">
              {" "}
              <Introduction singleTeacherInfo={singleStudentInfo} />
              <TableToBookClass />
            </div>
            <div className="col-lg-3 box">
              <NotifyClass />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
