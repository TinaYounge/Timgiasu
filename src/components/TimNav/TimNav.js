import React, { useState } from "react";
import "./Style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png";

function TimNav() {
  const [navbar, setNavbar] = useState(false);
  const ChangeBackGround = () => {
    if (window.scrollY >= 55) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackGround);
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={navbar ? "active fixed-top" : "active fixed-top "}
      >
        <Container className="normal">
          <Navbar.Brand href="/">
            <img src={logo} height={45} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav normal " />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto "></Nav>
            <Nav>
              <Nav.Link href="/">Trang chủ</Nav.Link>
              <Nav.Link href="/StudentUploadInfo"> Về chúng tôi</Nav.Link>
              <Nav.Link href="/LoginPage">Đăng nhập</Nav.Link>
              <Nav.Link href="/RegisterPage">Đăng ký</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TimNav;
