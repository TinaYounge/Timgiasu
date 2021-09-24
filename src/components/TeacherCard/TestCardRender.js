import React, { useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";

function TestCardRender({ userIdOfSubject }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(userIdOfSubject));
  }, [dispatch, userIdOfSubject]);
  const userInfo = useSelector((state) => state.singleUserInfo.user);

  const renderTooltip = (props) => (
    <Popover
      id="popover-basic"
      {...props}
      style={{
        // backgroundColor: "grey",

        padding: "2px 10px",
        borderRadius: 3,
        width: "18rem",
        height: "500px",
        ...props.style,
      }}
    >
      <Popover.Header as="h3" style={{ backgroundColor: "transparent" }}>
        <strong>Gia sư:{userInfo[userIdOfSubject].fullname}</strong>
      </Popover.Header>
      <Popover.Body>{userInfo[userIdOfSubject].desc}</Popover.Body>
    </Popover>
  );

  return userInfo[userIdOfSubject] ? (
    <div>
      {" "}
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
                <img
                  className="card-img-top "
                  src={userInfo[userIdOfSubject].profilePicture}
                  alt="..."
                  height="180px"
                />
              </div>
              <div className="card-body p-4">
                <div className="text-center">
                  <div class="badge bg-primary bg-gradient rounded-pill mb-1">
                    {userInfo[userIdOfSubject].city}
                  </div>
                  <h5
                    className="fw-bolder"
                    style={{ textTransform: "uppercase" }}
                  >
                    {userInfo[userIdOfSubject].fullname}
                  </h5>
                  <div className=" d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <span style={{ color: "black" }}> - 26 classes</span>
                  </div>
                  {/* {price30a.price30}{" "} */}
                </div>
              </div>
              <div className="align-self-center ">
                <div className="text-center">
                  <Link
                    className=" btn-grad p-1"
                    style={{ width: "150px" }}
                    to={"/TeacherDetailPage/" + userInfo[userIdOfSubject]._id}
                  >
                    HỌC NGAY{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  ) : (
    <div>Không</div>
  );

  // );
}

export default TestCardRender;
