import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        <i class="bi bi-plus-circle-fill"> Thêm </i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bạn chắc chắn thêm lớp học?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn thêm</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại{" "}
          </Button>
          <Button variant="primary">Đồng ý</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function TeacherPriceInput() {
  return (
    <div>
      <h2>Thông tin môn dạy</h2>

      <div className="group col-md-12 ">
        <div className="row">
          <div className=" col">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Môn học{" "}
            </label>{" "}
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Tiếng Anh"
            />{" "}
          </div>
          <div className=" col">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Lớp{" "}
            </label>{" "}
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Lớp 7"
            />{" "}
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Giá buổi học 30 phút
            </label>{" "}
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: 150.000 VND"
            />{" "}
          </div>
          <div className=" col-md-3">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Giá buổi học 60 phút{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: 200.000 VND"
            />{" "}
          </div>
          <div className=" col-md-3">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Combo 5 buổi học 60 phút{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: 800.000 VND"
            />{" "}
          </div>
          <div className=" col-md-3">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Combo 10 buổi học 60 phút{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: 1.500.000 VND"
            />{" "}
          </div>
        </div>
      </div>
      <br />
      <Example />
    </div>
  );
}

export default TeacherPriceInput;
