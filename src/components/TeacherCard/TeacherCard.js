import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "./StyleTeacherCard.css";

function TeacherCard({ teacherInfo }) {
  const renderTooltip = (props) => (
    <Popover
      id="popover-basic"
      {...props}
      style={{
        // backgroundColor: "grey",
        padding: "2px 10px",
        borderRadius: 3,
        width: "18rem",
        height: "420px",
        ...props.style,
        backgroundColor: "lightblue",
      }}
    >
      <Popover.Header as="h3" style={{ backgroundColor: "transparent" }}>
        <strong>Gia sư: </strong>
        {teacherInfo.fullname}
      </Popover.Header>
      <Popover.Body>{teacherInfo.desc}</Popover.Body>
    </Popover>
    // </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 0, hide: 0 }}
        overlay={renderTooltip}
      >
        <div className="  mt-4 px-2 ">
          <div className="card     res2  bg-grey">
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
                <div class="badge bg-primary rounded-pill mb-1 ">
                  {teacherInfo.city}
                </div>
                <h5
                  className="fw-bolder"
                  style={{ textTransform: "uppercase" }}
                >
                  {teacherInfo.fullname}
                </h5>
                <div className=" d-flex justify-content-center small text-warning mb-2">
                  <ReactStars
                    count={teacherInfo.avgScore}
                    onChange={null}
                    size={24}
                    color="#ffd700"
                    edit={false}
                  />
                </div>
                60.000-120.000 VND
              </div>
            </div>
            <div className="align-self-center ">
              <div className="text-center">
                <Link
                  className=" btn-grad p-1"
                  style={{ width: "150px" }}
                  to={"/TeacherDetailPage/" + teacherInfo._id}
                >
                  HỌC NGAY{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default TeacherCard;
