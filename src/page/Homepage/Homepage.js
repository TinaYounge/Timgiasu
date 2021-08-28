import React from "react";
import Filter from "../../components/Filter/Filter.js";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.js";

function Homepage() {
  return (
    <div>
      <LandingPage />
      <br></br>
      <center>
        <Filter />
      </center>
      <TeacherCard />
    </div>
  );
}

export default Homepage;
