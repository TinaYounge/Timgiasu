import React from "react";
import "./StyleTeacherCard.css";
function TeacherCard({ teacherInfo }) {
  return (
    <div>
      <a target="_blank" href="/TeacherDetailPage">
        <div className="  mb-5 px-4 mt-5 " style={{ width: "18rem" }}>
          <div className="card h-100 shadow border-0 container_foto">
            <div style={{ width: "100%", height: "200px" }}>
              {" "}
              <img
                className="card-img-top "
                src={teacherInfo.profilePicture}
                alt="..."
                height="100%"
              />
            </div>

            <div class="">
              <div class="ver_mas text-center">
                <span class="">
                  {" "}
                  <p style={{ color: "blue" }} className="fs-4  ">
                    {teacherInfo.desc}
                  </p>
                </span>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="text-center">
                <div class="badge bg-primary bg-gradient rounded-pill mb-2">
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
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a
                  className="btn btn-grad mt-auto"
                  href={"/TeacherDetailPage/" + teacherInfo._id}
                >
                  Học Ngay{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default TeacherCard;
