import React from "react";

function SubjectCard({ allSubjectsInfo }) {
  return (
    <div className="  mb-5 px-4 mt-5 " style={{ width: "18rem" }}>
      <div
        className="position-relative mb-5 text-center"
        style={{ backgroundColor: "rgb(95, 63, 211)", borderRadius: "5px" }}
      >
        <img
          className="img-fluid rounded-3 mb-3"
          src="https://i.pinimg.com/564x/9f/9e/8d/9f9e8dc7787fabf094581ce56e83647a.jpg"
          alt="..."
        />
        <a
          className="h5 fw-bolder text-decoration-none link-dark stretched-link"
          href="/"
        >
          {allSubjectsInfo}
        </a>
      </div>
    </div>
  );
}

export default SubjectCard;
