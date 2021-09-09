import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/AllTeachers/GetAllTeacherAction";
import TeacherCard from "./TeacherCard";
function RenderTeacherCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);
  const allTeacherInfo = useSelector((state) => state);
  // const allTeacherUser = allTeacherInfo.user;
  // console.log("user", allTeacherUser);
  // console.log("allTeacherInfo", allTeacherInfo.user);
  return allTeacherInfo ? (
    allTeacherInfo.user.map((item) => {
      return (
        <div>
          <TeacherCard teacherInfo={item} />
        </div>
      );
    })
  ) : (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default RenderTeacherCard;
