import React, { useEffect } from "react";
import "./Style.css";
import {
  Container,
  Nav,
  Navbar,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import logo from "../../Images/logo.png";
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

  useEffect(() => {
    dispatch(getSingleOwnUser());
  }, [dispatch]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("http://localhost:3000/");
  };
  const singleStudentInfo = useSelector((state) => state.studentLogin.student);
  return singleStudentInfo._id ? (
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
              <Nav.Link
                as={Link}
                to="/"
                style={{ color: "white", paddingRight: "20px" }}
              >
                Trang chủ
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/AboutUs"
                style={{ color: "white", paddingRight: "20px" }}
              >
                {" "}
                Về chúng tôi
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/CardPage/" + singleStudentInfo._id}
                style={{ color: "white", paddingRight: "20px" }}
              >
                {" "}
                Giỏ hàng{" "}
              </Nav.Link>
              <div
                style={{
                  color: "white",
                  paddingRight: "20px",
                  marginTop: "6px",
                }}
                onClick={handleLogout}
              >
                Logout
              </div>
              <NavLink to={"/StudentDetailPage/" + singleStudentInfo._id}>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        <div>Xin chào {singleStudentInfo.username} </div>
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Image
                        ref={ref}
                        {...triggerHandler}
                        roundedCircle
                        src={singleStudentInfo.profilePicture}
                        height={30}
                        width={30}
                      />
                    )}
                  </OverlayTrigger>
                  <span className="visually-hidden">unread messages</span>
                  {singleStudentInfo.lastName}{" "}
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  ) : (
    <div className="">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="active">
        <Container className="">
          <Navbar.Brand href="/">
            <img src={logo} height={45} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto "></Nav>
            <Nav>
              <NavLink
                to="/"
                as={Link}
                style={{ color: "white", paddingRight: "20px" }}
              >
                Trang chủ
              </NavLink>
              <NavLink
                as={Link}
                style={{ color: "white", paddingRight: "20px" }}
                to="/StudentUploadInfo"
              >
                {" "}
                Về chúng tôi
              </NavLink>
              <NavLink
                as={Link}
                style={{ color: "white", paddingRight: "20px" }}
                to="/LoginPage"
              >
                Đăng nhập
              </NavLink>
              <NavLink
                as={Link}
                style={{ color: "white", paddingRight: "20px" }}
                to="/RegisterPage"
              >
                Đăng ký
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TimNav;
