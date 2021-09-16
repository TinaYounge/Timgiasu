import React, { useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";

function TestCardRender({ userIdOfSubject }) {
  console.log("test giong id ", userIdOfSubject);
  const userInfo = useSelector((state) => state.singleUserInfo.user);
  console.log("userInfoOfSubject", userInfo);
  const renderTooltip = (props) => (
    <Popover
      id="popover-basic"
      {...props}
      style={{
        backgroundColor: "grey",
        padding: "2px 10px",
        borderRadius: 3,
        width: "18rem",
        height: "420px",
        ...props.style,
      }}
    >
      <Popover.Header as="h3" style={{ backgroundColor: "grey" }}>
        <strong>Gia sư:kekek </strong>
      </Popover.Header>
      <Popover.Body>hahah</Popover.Body>
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
          <div className="card     res2  ">
            <div style={{ width: "100%", height: "180px" }}>
              {" "}
              <img className="card-img-top " src="" alt="..." height="180px" />
            </div>
            <div className="card-body p-4">
              <div className="text-center">
                <div class="badge bg-primary bg-gradient rounded-pill mb-1">
                  Toán
                </div>
                <h5
                  className="fw-bolder"
                  style={{ textTransform: "uppercase" }}
                >
                  {userInfo.fullname}
                </h5>
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
                <Link
                  className=" btn-grad p-1"
                  style={{ width: "150px" }}
                  to="/TeacherDetailPage/"
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

export default TestCardRender;
