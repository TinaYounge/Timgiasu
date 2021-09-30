import React from "react";
import { Accordion } from "react-bootstrap";
import ModalPrice from "../ModalPrice/ModelPrice";

function SubjectAcc({ ClassesTeacherInfo }) {
  let RenderCard;
  if (ClassesTeacherInfo) {
    RenderCard = ClassesTeacherInfo.map((item, index) => {
      return (
        <div>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              {item.subject}-{item.grade}
            </Accordion.Header>
            <Accordion.Body>
              <ModalPrice priceInfo={item} />
            </Accordion.Body>
          </Accordion.Item>
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className="box sticky-top"
      style={{ padding: "20px", minHeight: "100px" }}
    >
      <Accordion defaultActiveKey="0">{RenderCard} </Accordion>
    </div>
  );
}

export default SubjectAcc;
