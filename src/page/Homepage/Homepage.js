import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import SubjectCard from "../../components/SubjectCard/SubjectCard.js";
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
                <div class="fs-3 fw-bold container px-5  ">Gợi ý môn học</div>
                <SubjectCard />
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
