import React from "react";
import UploadPic from "../UploadPic/UploadPic";

function Profile({ singleTeacherInfoAll }) {
  const singleTeacherInfo = singleTeacherInfoAll.singleTeacherInfo;
  return (
    <div>
      <div>
        <div className=" align-items-center mt-lg-5 mb-4">
          <img
            className="img-fluid rounded-circle img-thumbnail"
            src={singleTeacherInfo.profilePicture}
            alt="profile"
            style={{ height: "186px" }}
          />
          <UploadPic id={singleTeacherInfoAll.id} />

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
              {singleTeacherInfo.company}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
