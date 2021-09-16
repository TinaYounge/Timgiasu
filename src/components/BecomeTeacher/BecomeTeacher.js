import React from "react";
import "./Style.css";
import Teacher from "../../Images/teacher.png";
import { Link } from "react-router-dom";
function BecomeTeacher() {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-sm-8 col-md-6">
              <div className="px-5 px-sm-0 ">
                <img
                  className="img-fluid rounded-circle teacher "
                  src={Teacher}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <h2 className="display-5 lh-1 mb-4 fw-bolder">Đăng kí gia sư </h2>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0 ">
                Đội ngũ gia sư sẽ có khả năng tiếp cận với hàng nghìn học sinh,
                sinh viên Việt Nam. Bên cạnh đó, chúng tôi cung cấp cho bạn
                những nền tảng để kế nối và truyền đạt cho học sinh tiên tiến
                nhất.
              </p>
              <Link
                className="btn-grad py-2 mt-4 gx-0"
                style={{ width: "150px" }}
                to="./RegisterPage"
              >
                ĐĂNG KÝ NGAY
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeTeacher;
