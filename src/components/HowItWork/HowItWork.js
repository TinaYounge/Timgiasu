import React from "react";
import Online from "../../Images/online.png";
function HowItWork() {
  return (
    <section id="features" className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div className="container-fluid px-5">
              <div className="row gx-5">
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Giáo viên uy tín</h3>
                    <p className="text-muted mb-0">
                      Với đội ngũ giáo viên đã được xét duyệt và có bằng cấp
                      liên quan.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Lớp học theo yêu cầu</h3>
                    <p className="text-muted mb-0">
                      Hệ thống book lớp học nhanh, bạn có thể học ngay sau khi
                      book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                  <div className="text-center">
                    <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Học phí cạnh tranh</h3>
                    <p className="text-muted mb-0">
                      Tùy từng vào giáo viên bạn chọn, bạn sẽ có học phí cạnh
                      tranh khác nhau.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Học mọi lúc, mọi nơi</h3>
                    <p className="text-muted mb-0">
                      Bạn có thể đăng kí học tại nhà, hoặc online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-0">
            <div className="features-device-mockup">
              <img
                className="img-fluid rounded-circle teacher "
                src={Online}
                alt="..."
              />
              <div className="device-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
