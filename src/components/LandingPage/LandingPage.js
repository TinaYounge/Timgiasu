import React from "react";
import { Link } from "react-router-dom";
import "./Style2.css";
function LandingPage() {
  return (
    <div>
      <div className=" py-5 bg-img bg-clor res">
        <div className="container  my-5">
          <div className="row gx-5  ">
            <div className="col-lg-5 col-xl-5 col-xxl-5 box ">
              <div className="my-5 text-center text-xl-start mx-3">
                <h1 className="display-4  fw-bolder text-white mb-2 ">
                  Tìm gia sư nơi kết nối tri thức{" "}
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  Đăng ký ngay để nhận được ưu đãi
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <Link
                    className=" btn-pink btn-lg px-4 me-sm-3"
                    style={{ width: "" }}
                    to="/RegisterPage"
                  >
                    Giáo viên{" "}
                  </Link>
                  <Link
                    className=" btn btn-outline-light btn-lg px-4"
                    style={{ width: "" }}
                    to="/RegisterPage"
                  >
                    Học sinh{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none  d-xl-block text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
