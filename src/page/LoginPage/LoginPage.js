import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Login from "../../components/Login/Login";

function LoginPage() {
  const loginInfo1 = useSelector((state) => state.userLogin);
  const loginInfo = loginInfo1.user;
  return loginInfo1.loggedIn ? (
    <Redirect to={"/UploadInfoPage/" + loginInfo._id} />
  ) : (
    <Login />
  );
}

export default LoginPage;
