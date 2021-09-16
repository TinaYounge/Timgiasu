import React from "react";
import SubjectCard from "./SubjectCard";

function RenderSubject() {
  const allSubjectsInfo = [
    "Toán",
    "Lý",
    "Hóa",
    "Tiếng Anh",
    "Văn",
    "Hội họa",
    "Tiếng Nhật",
    "Piano",
    "Hội họa",
    "Tiếng Pháp",
  ];
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

  return <div className="card-group">{RenderCard}</div>;
}

export default RenderSubject;
