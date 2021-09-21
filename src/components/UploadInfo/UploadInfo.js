import React from "react";
import { Link } from "react-router-dom";
import ExperienceInfo from "../ExperienceInfo/ExperienceInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import "./Style.css";
function UploadInfo({ singleUserInfoCombine }) {
  const singleUserInfo = singleUserInfoCombine[0];
  const id = singleUserInfoCombine[1];
  // singleUserInfo[id]?(<div>hahah</div>):(<div>hihi</div>)
  return singleUserInfo[id] ? (
    <div>
      <div className="py-5">
        <div className=" bg-light   px-4 px-md-5 mb-5 py-5">
          <div className=" px-5 my-5  mb-5">
            <div className=" px-5 my-5">
              <div className="text-center section-separator">
                <h2 className="fw-bolder">
                  Chào mừng {singleUserInfo[id].username}!
                </h2>
                <p className="lead fw-normal text-muted mb-5">
                  Giới thiệu bản thân để học sinh đánh giá cao bạn{" "}
                </p>
              </div>
            </div>
            <PersonalInfo id={id} />
            <br />
            <div className="px-5 my-5 section-separator "></div>
            <ExperienceInfo id={id} />

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
          <div className="">
            <div className="text-center">
              <Link className="btn-lg btn-grad" to={"/TeacherDetailPage/" + id}>
                Hoàn thành
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default UploadInfo;
