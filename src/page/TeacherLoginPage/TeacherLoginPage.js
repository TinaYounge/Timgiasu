import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import LoginTeacher from "../../components/LoginTeacher/LoginTeacher";

function TeacherLoginPage() {
  const loginInfo1 = useSelector((state) => state.userLogin);

  return loginInfo1.loggedIn ? <Redirect to="/" /> : <LoginTeacher />;
}

export default TeacherLoginPage;
