import React from "react";
import ExperienceInfo from "../ExperienceInfo/ExperienceInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import "./Style.css";
function UploadInfo() {
  return (
    <div className="py-5">
      <div className=" bg-light   px-4 px-md-5 mb-5 py-5">
        <div className=" px-5 my-5  mb-5">
          <div className=" px-5 my-5">
            <div className="text-center section-separator">
              <h2 className="fw-bolder">Chào mừng Minh Nguyệt!</h2>
              <p className="lead fw-normal text-muted mb-5">
                Giới thiệu bản thân để học sinh đánh giá cao bạn{" "}
              </p>
            </div>
          </div>
          <PersonalInfo />
          <br />
          <div className="px-5 my-5 section-separator "></div>
          <ExperienceInfo />

          <div className="px-5 my-5 section-separator "></div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                id="gridCheck"
              />

              <label className="form-check-label " for="gridCheck">
                Tôi đồng ý với mọi điều kiện của công ty{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <div className="text-center">
            <a
              className="btn btn-outline-success mt-auto"
              href="/TeacherDetailPage"
            >
              Hoàn thành{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadInfo;
