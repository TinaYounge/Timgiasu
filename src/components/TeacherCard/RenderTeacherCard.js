import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/AllTeachers/GetAllTeacherAction";
import TeacherCard from "./TeacherCard";
function RenderTeacherCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);
  const allTeacherInfo = useSelector((state) => state.allTeachers);
  let RenderCard;
  if (allTeacherInfo) {
    RenderCard = allTeacherInfo.user.map((item) => {
      return (
        <div>
          <TeacherCard teacherInfo={item} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return <div className="card-group">{RenderCard}</div>;
}

export default RenderTeacherCard;
