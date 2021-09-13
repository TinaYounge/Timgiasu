import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SubjectCard({ allSubjectsInfo }) {
  return (
    <Link class="card-text " to="./haha">
      <div className="px-2 mt-2 py-3 ">
        <Card style={{ width: "12rem" }}>
          <Card.Img
            variant="top"
            src="https://unix.edu.vn/wp-content/uploads/2019/10/gia-su-lop-12-1.jpg"
          />
          <Card.Body>
            <Card.Title>{allSubjectsInfo}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}

export default SubjectCard;
