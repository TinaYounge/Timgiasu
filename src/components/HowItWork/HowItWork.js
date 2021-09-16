import React from "react";
import Online from "../../Images/online.png";
function HowItWork() {
  return (
    <section id="features" className="bg-light py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div class="container-fluid px-5">
              <div class="row gx-5">
                <div class="col-md-6 mb-5">
                  <div class="text-center">
                    <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                    <h3 class="font-alt">Giáo viên uy tín</h3>
                    <p class="text-muted mb-0">
                      Với đội ngũ giáo viên đã được xét duyệt và có bằng cấp
                      liên quan.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                  <div class="text-center">
                    <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                    <h3 class="font-alt">Lớp học theo yêu cầu</h3>
                    <p class="text-muted mb-0">
                      Hệ thống book lớp học nhanh, bạn có thể học ngay sau khi
                      book.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                  <div class="text-center">
                    <i class="bi-gift icon-feature text-gradient d-block mb-3"></i>
                    <h3 class="font-alt">Học phí cạnh tranh</h3>
                    <p class="text-muted mb-0">
                      Tùy từng vào giáo viên bạn chọn, bạn sẽ có học phí cạnh
                      tranh khác nhau.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-center">
                    <i class="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                    <h3 class="font-alt">Học mọi lúc, mọi nơi</h3>
                    <p class="text-muted mb-0">
                      Bạn có thể đăng kí học tại nhà, hoặc online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-0">
            <div class="features-device-mockup">
              <img
                className="img-fluid rounded-circle teacher "
                src={Online}
                alt="..."
              />
              <div class="device-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
