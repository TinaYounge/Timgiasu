import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style.css";

function SubjectCard({ allSubjectsInfo }) {
  return (
    <Link
      className="card-text"
      to={"./AllTeacherPage?subjectFilter=" + allSubjectsInfo.name}
    >
      <div className="px-2 ">
        <Card className="res1 ">
          <div className="row">
            <div className="col ">
              <img
                className="rounded"
                src={allSubjectsInfo.url}
                style={{ width: "90px" }}
                alt="teacher"
                variant="left"
              />
            </div>
            <div className="col ">
              <div
                style={{
                  textTransform: "uppercase",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {allSubjectsInfo.name}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}

export default SubjectCard;
