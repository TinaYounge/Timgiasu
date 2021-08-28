import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="bg-success py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Tìm gia sư nơi kết nối tri thức{" "}
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  Đăng ký ngay để nhận được ưu đãi
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-dark btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Giáo viên{" "}
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    Học Sinh{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5"
                src="https://i.pinimg.com/564x/20/2e/ad/202ead76019a9654bfeef1bcb366dbe6.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
