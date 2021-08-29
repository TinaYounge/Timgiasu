import React from "react";

function TeacherCard() {
  return (
    <div>
      {/* <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://i.pinimg.com/564x/e3/e9/df/e3e9df95ee8460b2ba88a58e8e06c713.jpg"
                alt="..."
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Minh Nguyệt</h5>
                  <p>Giáo viên trường THPT Thủ Đức, Môn toán</p>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  $40.00 - $80.00
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a
                    className="btn btn-outline-dark mt-auto"
                    href="/TeacherDetailPage"
                  >
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* test */}
      <div className="col-lg-4 mb-5  px-4 px-lg-5 mt-5 ">
        <div className="card h-100 shadow border-0 ">
          <img
            className="card-img-top"
            src="https://znews-photo.zadn.vn/w660/Uploaded/rugtzn/2016_02_22/1_WLIC_thumb.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Minh Nguyệt</h5>
              <p>Giáo viên trường THPT Thủ Đức, Môn toán</p>
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
    </div>
  );
}

export default TeacherCard;
