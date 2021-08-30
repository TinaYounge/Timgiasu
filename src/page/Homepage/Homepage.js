import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import SubjectCard from "../../components/SubjectCard/SubjectCard.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.js";
import Test from "../../components/TeacherCard/Test.js";

function Homepage() {
  return (
    <div>
      <LandingPage />
      <br></br>
      <div className="">
        <div className=" ">
          <SearchBox />
          <div class="py-5">
            <div class="container px-5 my-5">
              <div class="row gx-5">
                <SubjectCard />
                <TeacherCard />
                {/* <Test /> */}
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
