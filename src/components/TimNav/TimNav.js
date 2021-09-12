import React, { useState } from "react";
import "./Style.css";
import { Badge, Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../Images/logo.png";

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
              <Nav.Link href="/">Trang chủ</Nav.Link>
              <Nav.Link href="/StudentUploadInfo"> Về chúng tôi</Nav.Link>
              <Nav.Link href="/LoginPage">Đăng nhập</Nav.Link>
              <Nav.Link href="/RegisterPage">Đăng ký</Nav.Link>
              <Nav.Link href="/RegisterPage">
                <a>
                  Your profile <Badge bg="primary">9</Badge>
                  <span className="visually-hidden">unread messages</span>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TimNav;
