import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Login from "../../components/Login/Login";

function LoginPage() {
  const loginInfo1 = useSelector((state) => state.studentLogin);
  const loginInfo = loginInfo1.student;
  return loginInfo1.loggedIn ? (
    // <Redirect to={"/StudentUploadInfo/" + loginInfo._id} />
    <Redirect to="/" />
  ) : (
    <Login />
  );
}

export default LoginPage;
