import React from "react";

function TeacherPriceInput() {
  return (
    <div>
      <div className="group col-md-12 ">
        <div className="row  ">
          <div className=" col-md-3">
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
    </div>
  );
}

export default TeacherPriceInput;
