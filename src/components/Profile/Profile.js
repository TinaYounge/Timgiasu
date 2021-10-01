import React from "react";

function Profile({ singleTeacherInfoAll }) {
  const singleTeacherInfo1 = singleTeacherInfoAll.singleTeacherInfo;
  const singleTeacherInfo = singleTeacherInfo1;

  return (
    <div className="">
      <div className=" align-items-center mt-lg-5 mb-4">
        <img
          className="img-fluid rounded-circle img-thumbnail"
          src={singleTeacherInfo.profilePicture}
          alt="profile"
        />

        <div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
        </div>
        <div className="ms-3">
          <div className="fw-bold text-center ">
            {singleTeacherInfo.highestCertificate}-
            {singleTeacherInfo.universityGotCert}
          </div>
          <div className="text-muted text-center">
            {singleTeacherInfo.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
