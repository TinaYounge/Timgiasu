import React from "react";
import { Link } from "react-router-dom";
import ExperienceInfo from "../ExperienceInfo/ExperienceInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TeacherPriceInput from "../TeacherPriceInput/TeacherPriceInput";
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
                  Chào mừng {singleUserInfo[id].fullname}!
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
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default UploadInfo;
