import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Introduction from "../../components/Introduction/Introduction";
import NotifyClassStudent from "../../components/NotifyClass/NotiflyClassStudent";
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
  return (
    <div>
      <div className="py-5 body-height studentBg">
        <div className=" px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-2">
              <div className=" align-items-center mt-lg-5 mb-4 ">
                <img
                  className="img-fluid rounded-circle img-thumbnail"
                  src={singleStudentInfo.profilePicture}
                  alt="profile"
                />{" "}
                <div className="ms-3">
                  <div className="fw-bold text-center "></div>
                  <div className="text-muted text-center"></div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 box"
              style={{ padding: "20px", backgroundColor: "#F8F9F9" }}
            >
              <Introduction singleTeacherInfo={singleStudentInfo} />
              <TableToBookClass />
            </div>
            <div className="col-lg-4 ">
              <NotifyClassStudent />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
