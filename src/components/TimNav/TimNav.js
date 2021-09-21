import React, { useEffect, useState } from "react";
import "./Style.css";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import logo from "../../Images/logo.png";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import { getSingleOwnUser } from "../../redux/LoginStudent/LoginStudentAction";

function TimNav() {
  // const [navbar, setNavbar] = useState(false);
  // const ChangeBackGround = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", ChangeBackGround);
  const dispatch = useDispatch();
  // const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleOwnUser());
  }, [dispatch]);
  const singleTeacherInfo = useSelector((state) => state.studentLogin.student);
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        // className={navbar ? "active fixed-top " : "active2  "}
        className="active"
      >
        <Container className="">
          <Navbar.Brand href="/">
            <img src={logo} height={45} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto "></Nav>
            <Nav>
              <NavLink to="/">Trang chủ</NavLink>
              <NavLink to="/StudentUploadInfo"> Về chúng tôi</NavLink>
              <NavLink to="/LoginPage">Đăng nhập</NavLink>
              <NavLink to="/RegisterPage">Đăng ký</NavLink>
              <NavLink to="/RegisterPage">
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        Xin chào {singleTeacherInfo.username}{" "}
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Image
                        ref={ref}
                        {...triggerHandler}
                        roundedCircle
                        src={singleTeacherInfo.profilePicture}
                        height={30}
                        width={30}
                      />
                    )}
                  </OverlayTrigger>
                  <span className="visually-hidden">unread messages</span>
                  {singleTeacherInfo.lastName}{" "}
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TimNav;
