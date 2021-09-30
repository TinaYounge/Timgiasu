import React from "react";

function CommentBox({ singleTeacherInfo }) {
  let RenderCard;
  if (singleTeacherInfo.review) {
    RenderCard = singleTeacherInfo.review.map((item) => {
      return (
        <div className="d-flex mb-4">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src={item.studentProfilePicture}
              style={{ width: "50px" }}
              alt="..."
            />
          </div>
          <div className="ms-3">
            <div className="fw-bold">{item.studentName}</div>
            {item.value}
          </div>
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
    <div>
      <div
        className=" bg-light "
        style={{
          color: "black",
          borderColor: "#ced4d0",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <div className="card-body">
          <div>{RenderCard} </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
