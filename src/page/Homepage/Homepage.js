import React from "react";
import Filter from "../../components/Filter/Filter.js";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import Quote from "../../components/Quote/Quote.js";
import Schedule from "../../components/Schedule/Schedule.js";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.js";

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
                <TeacherCard />
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
