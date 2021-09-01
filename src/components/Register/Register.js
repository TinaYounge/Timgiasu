import React from "react";

function Register() {
  return (
    <div>
      <div className="py-5">
        <div className="container ">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Đăng Ký</h1>
              <p className="lead fw-normal text-muted mb-0">
                Vui lòng điền thông tin đầy đủ{" "}
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-group form-floating mb-3">
                    <select className="form-control">
                      <option>Gia sư</option>
                      <option>Học Sinh</option>
                    </select>
                    <label for="exampleFormControlSelect1">Bạn là?</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="name"
                      data-sb-validations="required,email"
                    />
                    <label for="text">Họ và Tên</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      Yêu cầu nhập họ và tên.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label for="email">Địa chỉ email</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      Yêu cầu địa chỉ email.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email không tồn tại.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="password"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label for="phone">Mật khẩu</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      Mật khẩu bắt buộc{" "}
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="password"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label for="phone">Nhập lại mật khẩu</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      Mật khẩu bắt buộc{" "}
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-grid">
                    <a
                      className=" btn-blue btn-lg px-4 me-sm-3 text-center"
                      href="/RegisterPage"
                    >
                      Đăng ký{" "}
                    </a>
                    <br />
                    <p>
                      Bạn đã có tải khoản? Vui lòng{" "}
                      <a href="/LoginPage">Đăng Nhập</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
