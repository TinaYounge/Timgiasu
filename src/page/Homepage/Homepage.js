import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import RenderSubject from "../../components/SubjectCard/RenderSubject.js";
import RenderTeacherCard from "../../components/TeacherCard/RenderTeacherCard.js";

function Homepage() {
  return (
    <div>
      <LandingPage />
      <div className="">
        <div className=" ">
          <SearchBox />
          <div className=" ">
            <div className=" ">
              <div className="row ">
                <div
                  className="fs-3 fw-bold container px-5  "
                  style={{ background: "rgb(248, 245, 238)" }}
                >
                  Gợi ý môn học
                </div>
                <RenderSubject />
                <div class="fs-3 fw-bold container px-5  ">
                  Giáo viên được đánh giá cao
                </div>
                <RenderTeacherCard />
                {/* <Test /> */}
                {/* <RenderInput /> */}
                {/* <Chip /> */}
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
