import React from "react";

function TimNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="/">
            Timgiasu{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/LoginPage">
                  Đăng nhập
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/RegisterPage">
                  Đăng Ký
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TimNav;
