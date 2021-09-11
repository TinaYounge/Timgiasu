import React from "react";
import { Accordion } from "react-bootstrap";
import Pricebox from "../Pricebox/Pricebox";

function SubjectAcc() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Toán-Lớp 9</Accordion.Header>
          <Accordion.Body>
            <Pricebox />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hóa-Tất cả</Accordion.Header>
          <Accordion.Body>
            <Pricebox />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SubjectAcc;
