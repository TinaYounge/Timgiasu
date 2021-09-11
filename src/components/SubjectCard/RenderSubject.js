import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../../redux/AllSubjects/GetAllSubjectAction";
import SubjectCard from "./SubjectCard";

function RenderSubject() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllSubjects());
  // }, [dispatch]);
  const allSubjectsInfo = ["Toán", "Lý", "Hóa", "Tiếng Anh", "Văn"];
  let RenderCard;
  if (allSubjectsInfo) {
    RenderCard = allSubjectsInfo.map((item) => {
      return (
        <div>
          <SubjectCard allSubjectsInfo={item} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="card-group " style={{ background: "rgb(248, 245, 238)" }}>
      {RenderCard}
    </div>
  );
}

export default RenderSubject;
