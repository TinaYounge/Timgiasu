import React from "react";

function HowItWork() {
  return (
    <div className="bg-light">
      <section className="py-2" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                Nền tảng kết nối gia sư đầu tiên tại Việt Nam{" "}
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div
                    className="
                      bg-primary 
                      text-white
                      rounded-3
                      mb-3
                    "
                    style={{ width: "20px" }}
                  >
                    <i class="bi bi-award-fill"></i>
                  </div>
                  <h2 className="h5">Giáo viên uy tín</h2>
                  <p className="mb-0">
                    Với đội ngũ giáo viên đã được xét duyệt và có bằng cấp liên
                    quan.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div
                    className="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                    "
                    style={{ width: "20px" }}
                  >
                    <i className="bi bi-building"></i>
                  </div>
                  <h2 className="h5">Hệ thống book lớp học trực tuyến</h2>
                  <p className="mb-0">
                    Hệ thống book lớp học nhanh, bạn có thể học ngay sau khi
                    book.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div
                    className="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                    "
                    style={{ width: "20px" }}
                  >
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Học phí cạnh tranh</h2>
                  <p className="mb-0">
                    Tùy từng vào giáo viên bạn chọn, bạn sẽ có học phí cạnh
                    tranh khác nhau.
                  </p>
                </div>
                <div className="col h-100">
                  <div
                    className="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                    "
                    style={{ width: "20px" }}
                  >
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Học mọi lúc, mọi nơi</h2>
                  <p className="mb-0">
                    Bạn có thể đăng kí học tại nhà, hoặc online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWork;
