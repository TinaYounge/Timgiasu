import React from "react";
import "./StyleTeacherCard.css";
function TeacherCard() {
  return (
    <div className="">
      <a target="_blank" href="/TeacherDetailPage">
        <div className="col-lg-4 mb-5  px-4 px-lg-5 mt-5 ">
          <div className="card h-100 shadow border-0 container_foto">
            <img
              className="card-img-top "
              src="https://znews-photo.zadn.vn/w660/Uploaded/rugtzn/2016_02_22/1_WLIC_thumb.jpg"
              alt="..."
            />
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="ver_mas text-center">
                <span class="">
                  {" "}
                  <p style={{ color: "blue" }} className="fs-4  ">
                    Với 2 năm kinh nghiệm dạy toán lớp 6 tại trường tư thục,
                    bằng đại học sư phạm
                  </p>
                </span>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="text-center">
                <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                  Toán
                </div>
                <h5 className="fw-bolder">Minh Nguyệt</h5>
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
                  className="btn btn-outline-dark mt-auto"
                  href="/TeacherDetailPage"
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
