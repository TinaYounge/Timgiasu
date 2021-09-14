import React from "react";
import "./StyleTeacherCard.css";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";

function TeacherCard({ teacherInfo }) {
  const renderTooltip = (props) => (
    <Tooltip
      id="button-tooltip"
      {...props}
      style={{
        backgroundColor: "purple",
        borderRadius: 3,
        ...props.style,
      }}
    >
      {teacherInfo.desc}
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger
        placement="top"
        delay={{ show: 0, hide: 0 }}
        overlay={renderTooltip}
      >
        <div className="  mt-4 px-2 ">
          <div className="card   border-1 shadow res2  ">
            <div style={{ width: "100%", height: "180px" }}>
              {" "}
              <img
                className="card-img-top "
                src={teacherInfo.profilePicture}
                alt="..."
                height="180px"
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
            <div className="align-self-center ">
              <div className="text-center">
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
      </OverlayTrigger>
    </div>
  );
}

export default TeacherCard;
