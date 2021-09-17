import React from "react";
import { Card } from "react-bootstrap";
import Logo from "../../Images/logo.png";
import "./Style.css";

function SubjectCard({ allSubjectsInfo }) {
  return (
    <a
      className="card-text"
      href={"./AllTeacherPage?subjectFilter=" + allSubjectsInfo}
    >
      <div className="px-2 " style={{ height: "40vh" }}>
        <Card className="res1">
          <Card.Img variant="top" src={Logo} />
          <Card.Body>
            <Card.Title style={{ textTransform: "uppercase" }}>
              {allSubjectsInfo}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </a>
  );
}

export default SubjectCard;
