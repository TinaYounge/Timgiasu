import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import RenderSubject from "../../components/SubjectCard/RenderSubject.js";
import RenderTeacherCard from "../../components/TeacherCard/RenderTeacherCard.js";
import ModalTim from "../../components/Modal/Modal.js";
function Homepage() {
  return (
    <div>
      <LandingPage />
      <div className="">
        <div className=" ">
          <SearchBox />
          <div className=" ">
            <div className=" ">
              <div className=" ">
                <div
                  className="fs-3 fw-bold  px-5  "
                  style={{ background: "rgb(248, 245, 238)" }}
                >
                  Gợi ý môn học
                  <div className="">
                    {" "}
                    <RenderSubject />
                  </div>
                </div>
                <ModalTim />{" "}
                <div class="fs-3 fw-bold px-5  ">
                  Giáo viên được đánh giá cao
                </div>
                <div className="">
                  <RenderTeacherCard />
                  {/* <Test /> */}
                  {/* <RenderInput /> */}
                  {/* <Chip /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Test /> */}
      <Quote />
    </div>
  );
}

export default Homepage;
