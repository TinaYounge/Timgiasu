import React from "react";
import { Table } from "react-bootstrap";
import ModalTim from "../Modal/Modal";

function TableToBookClass() {
  const TimePerDay = ["1", "2", "3"];
  let RenderCard;
  if (TimePerDay) {
    RenderCard = TimePerDay.map((item) => {
      return <td>{item}</td>;
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Gia sư</th>
            <th>Môn</th>
            <th>Book lớp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {RenderCard}
            <td>{/* <ModalTim /> */}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableToBookClass;
