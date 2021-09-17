import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/LoginUser/LoginAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const notify = () => toast("Chúc mừng bạn đăng nhập thành công!");
  const dispatch = useDispatch();

  const [userLoginState, setUserLoginState] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="py-5 ">
        <div className="container ">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Đăng nhập</h1>
              <p className="lead fw-normal text-muted mb-0">
                Vui lòng điền thông tin đầy đủ{" "}
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                      onChange={(e) =>
                        setUserLoginState({
                          ...userLoginState,
                          email: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setUserLoginState({
                          ...userLoginState,
                          password: e.target.value,
                        })
                      }
                    />
                    <label for="phone">Mật khẩu</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      Mật khẩu bắt buộc{" "}
                    </div>
                  </div>

                  <div className="d-grid ">
                    <a
                      className=" btn-grad btn-lg text-center"
                      onClick={() => {
                        dispatch(LoginAction(userLoginState));
                        notify();
                      }}
                    >
                      Đăng nhập{" "}
                    </a>
                    <ToastContainer />
                    {/* <Button
                      onClick={() => {
                        dispatch(LoginAction(userLoginState));
                        // notify();
                      }}
                    >
                      Đăng nhập{" "}
                    </Button> */}
                    <br />
                    <p>
                      Bạn đã chưa tải khoản? Vui lòng{" "}
                      <a href="/RegisterPage">Đăng Ký</a>
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

export default Login;
