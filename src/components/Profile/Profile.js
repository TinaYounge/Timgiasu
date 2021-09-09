import React from "react";

function Profile({ singleTeacherInfo }) {
  console.log("kakak", singleTeacherInfo);
  return (
    <div>
      <div>
        <div className=" align-items-center mt-lg-5 mb-4">
          <img
            className="img-fluid rounded-circle"
            src={singleTeacherInfo.profilePicture}
            alt="..."
          />
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div>
          <div className="ms-3">
            <div className="fw-bold text-center ">
              {/* {singleTeacherInfo.username} */}
            </div>
            <div className="text-muted text-center">
              {singleTeacherInfo.company}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
