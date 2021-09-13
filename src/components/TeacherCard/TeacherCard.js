import React from "react";
import "./StyleTeacherCard.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TeacherCard({ teacherInfo }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {teacherInfo.desc}{" "}
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a target="_blank" href="/TeacherDetailPage">
          <div className="  mt-4 px-2 py-3">
            <div className="card  shadow border-0  ">
              <div style={{ width: "100%", height: "120px" }}>
                {" "}
                <img
                  className="card-img-top "
                  src={teacherInfo.profilePicture}
                  alt="..."
                  height="100%"
                />
              </div>
              <div className="card-body p-4">
                <div className="text-center">
                  <div class="badge bg-primary bg-gradient rounded-pill mb-1">
                    Toán
                  </div>
                  <h5 className="fw-bolder">{teacherInfo.username}</h5>
                  <div className=" d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <span style={{ color: "black" }}> - 26 classes</span>
                  </div>
                  60.000-120.000 VND
                </div>
              </div>
              <div className=" pt-0 border-top-0 bg-transparent align-self-center">
                <div className="text-center ">
                  <a
                    className="btn-grad p-1 "
                    style={{ width: "150px" }}
                    href={"/TeacherDetailPage/" + teacherInfo._id}
                  >
                    HỌC NGAY{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </a>
      </OverlayTrigger>
    </div>
  );
}

export default TeacherCard;
