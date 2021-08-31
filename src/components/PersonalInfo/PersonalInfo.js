import React from "react";
import UploadPic from "../UploadPic/UploadPic";

import Daypicker from "../Daypicker/Daypicker";

function PersonalInfo() {
  return (
    <div>
      {" "}
      <h2>Giới thiệu bản thân</h2>
      <br />
      <div className="group col-md-12 row">
        <label className="col-sm-2 col-form-label fw-bold ">Họ và tên</label>
        <div className="col-sm-10">
          <input
            type="tel"
            className="form-control "
            placeholder="Ví dụ: Nguyễn Minh Nguyệt"
          />
        </div>
      </div>
      <br />
      <div className="group col-md-12 row">
        <label for="inputAddress" className="col-sm-2 col-form-label fw-bold">
          Cập nhật ảnh đại diện{" "}
        </label>
        <div className="col-sm-4">
          <UploadPic />
        </div>
      </div>
      <div className="group col-md-12 ">
        <div className="row  ">
          <div className=" col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Địa chỉ liên lạc
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: 12 Đường 3/2"
            />{" "}
          </div>
          <div className=" col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Thành phố{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: Hồ Chí Minh"
            />{" "}
          </div>
        </div>
      </div>
      <br />
      <div className="group col-md-12 row">
        <label for="inputAddress" className="col-sm-2 col-form-label fw-bold">
          Giới tính{" "}
        </label>
        <div className="col-sm-10">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Nam
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Nữ
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">
              Khác{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="row  ">
        <div className="form-group col-md-3">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Ngày sinh
          </label>{" "}
          <Daypicker />{" "}
        </div>
        <div className="form-group col-md-4">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Số điện thoại{" "}
          </label>{" "}
          <input
            type="tel"
            className="form-control"
            id="inputAddress"
            placeholder="Ví dụ: 0945372834"
          />{" "}
        </div>
        <div className="form-group col-md-4">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Hiện thông tin cá nhân{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option selected>Chọn...</option>
            <option>Hiện</option>
            <option>Không hiện</option>
          </select>
        </div>
        <br />
        <div className="form-group col-md-12">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Giới thiệu ngắn về bản thân{" "}
          </label>{" "}
          <form className="mb-4">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Xin chào! Mình là Minh Nguyêt! Mình có 5 năm kinh nghiệm..."
            ></textarea>
          </form>
        </div>
        <div className="   col-md-4">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Phương pháp dạy/ học{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option selected>Chọn...</option>
            <option>Trực tuyến</option>
            <option>Tại nhà</option>
            <option>Cả hai</option>
          </select>
        </div>
        <br />
      </div>
    </div>
  );
}

export default PersonalInfo;
