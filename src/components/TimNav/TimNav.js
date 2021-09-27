import React, { useEffect } from "react";
import "./Style.css";
import {
  Container,
  Nav,
  Navbar,
  Image,
  OverlayTrigger,
  Tooltip,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getSingleOwnUser } from "../../redux/LoginStudent/LoginStudentAction";
import { getSingleOwnUserTeacher } from "../../redux/LoginUser/LoginAction";

function TimNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleOwnUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSingleOwnUserTeacher());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("http://localhost:3000/");
  };
  const singleUserInfo = useSelector((state) => state.userLogin.user);
  const singleStudentInfo = useSelector((state) => state.studentLogin.student);
  console.log("singleUserInfo", singleUserInfo);
  return singleStudentInfo ? (
    <div className="">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="active">
        <Container className="">
          <Navbar.Brand href="/">
            <img src={logo} height={45} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <NavDropdown
              className="me-auto text "
              title="Môn học"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Tiếng%20Anh"
              >
                Tiếng Anh
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Lập%20trình"
              >
                Lập trình
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Toán"
              >
                Toán{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="AllTeacherPage?subjectFilter=Hóa">
                Hóa{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Môn khác{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav>
              <Nav.Link
                as={Link}
                className="text"
                to="/"
                style={{ color: "black", paddingRight: "20px" }}
              >
                Trang chủ
              </Nav.Link>
              <Nav.Link
                className="text"
                as={Link}
                to="/AboutUs"
                style={{ color: "black", paddingRight: "20px" }}
              >
                {" "}
                Về chúng tôi
              </Nav.Link>
              <Nav.Link
                className="text"
                as={Link}
                to={"/CardPage/" + singleStudentInfo._id}
                style={{ color: "black", paddingRight: "20px" }}
              >
                {" "}
                <i class="bi bi-cart3"></i>
              </Nav.Link>
              <div
                style={{
                  paddingRight: "20px",
                  marginTop: "6px",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
                className="text"
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
  ) : singleUserInfo._id ? (
    <div className="">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="active">
        <Container className="">
          <Navbar.Brand href="/">
            <img src={logo} height={45} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <NavDropdown
              className="me-auto text "
              title="Môn học"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Tiếng%20Anh"
              >
                Tiếng Anh
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Lập%20trình"
              >
                Lập trình
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="AllTeacherPage?subjectFilter=Toán"
              >
                Toán{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="AllTeacherPage?subjectFilter=Hóa">
                Hóa{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Môn khác{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav>
              <Nav.Link
                as={Link}
                className="text"
                to="/"
                style={{ color: "black", paddingRight: "20px" }}
              >
                Trang chủ
              </Nav.Link>
              <Nav.Link
                className="text"
                as={Link}
                to="/AboutUs"
                style={{ color: "black", paddingRight: "20px" }}
              >
                {" "}
                Về chúng tôi
              </Nav.Link>

              <div
                style={{
                  paddingRight: "20px",
                  marginTop: "6px",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
                className="text"
              >
                Logout
              </div>
              <NavLink to={"/PersonalTeacherPage/" + singleUserInfo._id}>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        <div>Xin chào {singleUserInfo.username} </div>
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Image
                        ref={ref}
                        {...triggerHandler}
                        roundedCircle
                        src={singleUserInfo.profilePicture}
                        height={30}
                        width={30}
                      />
                    )}
                  </OverlayTrigger>
                  <span className="visually-hidden">unread messages</span>
                  {singleUserInfo.lastName}{" "}
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
                className="text"
                to="/"
                as={Link}
                style={{ color: "black", paddingRight: "20px" }}
              >
                Trang chủ
              </NavLink>
              <NavLink
                className="text"
                as={Link}
                style={{ color: "black", paddingRight: "20px" }}
                to="/StudentUploadInfo"
              >
                {" "}
                Về chúng tôi
              </NavLink>
              <NavLink
                className="text"
                as={Link}
                style={{ color: "black", paddingRight: "20px" }}
                to="/LoginPage"
              >
                Đăng nhập
              </NavLink>
              <NavLink
                className="text"
                as={Link}
                style={{ color: "black", paddingRight: "20px" }}
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
