import React from "react";

function AboutUs() {
  return (
    <div>
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">Tìm gia sư- kết nối tri thức</h1>
                <p className="lead fw-normal text-muted mb-4">
                  Website kết nối gia sư với học sinh tại Việt Nam. Chúng tôi
                  với mục tiêu đưa việc học tập tới gần và dễ dàng hơn tới học
                  sinh.
                </p>
                <a className="btn btn-primary btn-lg" href="#scroll-target">
                  Tìm hiều thêm{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Thành lập</h2>
              <p className="lead fw-normal text-muted mb-0">
                Với sự công tác từ những thành viên có đam mê với IT và mong
                muốn giúp phụ huynh học sinh không phải khó khăn khi tìm thầy cô
                cho con.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Phát triển &amp; Tầm nhìn</h2>
              <p className="lead fw-normal text-muted mb-0">
                Mục tiêu trở thành nơi kết nối gia sư cho học sinh sinh viên
                trên cả nước.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Team</h2>
            <p className="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 className="fw-bolder">Tina Younge</h5>
                <div className="fst-italic text-muted">Founder &amp; CEO</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 className="fw-bolder">Arden Vasek</h5>
                <div className="fst-italic text-muted">CFO</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-sm-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 className="fw-bolder">Toribio Nerthus</h5>
                <div className="fst-italic text-muted">Operations Manager</div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 className="fw-bolder">Malvina Cilla</h5>
                <div className="fst-italic text-muted">CTO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
