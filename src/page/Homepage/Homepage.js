import React, { useState } from "react";
import HowItWork from "../../components/HowItWork/HowItWork.js";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import RenderSubject from "../../components/SubjectCard/RenderSubject.js";
import OverLay from "../../components/TeacherCard/OverLay.js";
import RenderTeacherCard from "../../components/TeacherCard/RenderTeacherCard.js";
function Homepage() {
  const [page, setPage] = useState(1);
  let limit = 5;
  return (
    <div>
      <LandingPage />
      <div className="">
        <div className=" ">
          <SearchBox />
          <OverLay />
          <div className=" ">
            <div className=" ">
              <div className=" ">
                <div class="fs-3 fw-bold px-5  ">Gợi ý môn học </div>
                <div style={{ background: "" }}>
                  <div className="row ">
                    <div className="col-lg-1 align-self-center ">
                      <i
                        class="bi bi-chevron-left "
                        style={{ cursor: "pointer" }}
                      ></i>
                      <i
                        class="bi bi-chevron-left "
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                    <div className="col-lg-10">
                      <RenderSubject />
                    </div>
                    <div className="col-lg-1 align-self-center">
                      <i
                        class="bi bi-chevron-right"
                        style={{ cursor: "pointer" }}
                      ></i>
                      <i
                        class="bi bi-chevron-right"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <HowItWork />
                <div class="fs-3 fw-bold px-5  ">
                  Giáo viên được đánh giá cao
                </div>
                <div className="row ">
                  <div className="col-lg-1 align-self-center">
                    <i
                      class="bi bi-chevron-left "
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (page > 1) {
                          setPage(page - 1);
                        }
                      }}
                    >
                      Trước
                    </i>
                  </div>

                  <div className="col-lg-10">
                    {" "}
                    <RenderTeacherCard page={{ page, limit }} />
                  </div>
                  <div className="col-lg-1 align-self-center">
                    <i
                      class="bi bi-chevron-right"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (page < 3) {
                          setPage(page + 1);
                        }
                      }}
                    >
                      Thêm
                    </i>{" "}
                  </div>

                  <center>
                    <a
                      className="  btn-grad btn-lg "
                      style={{ width: "200px" }}
                      href="/AllTeacherPage"
                    >
                      Nhiều gia sư hơn
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default Homepage;
