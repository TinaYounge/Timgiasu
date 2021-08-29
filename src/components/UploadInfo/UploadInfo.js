import React from "react";
import Daypicker from "../Daypicker/Daypicker";
import UploadPic from "../UploadPic/UploadPic";
import "./Style.css";
function UploadInfo() {
  return (
    <div className="py-5 bg-light ">
      <div className="container px-5 my-5">
        <div className="container px-5 my-5">
          <div className="text-center section-separator">
            <h2 className="fw-bolder">Chào mừng Minh Nguyệt!</h2>
            <p className="lead fw-normal text-muted mb-5">
              Giới thiệu bản thân để học sinh đánh giá cao bạn{" "}
            </p>
          </div>
        </div>
        <h2>Thông tin cá nhân</h2>
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
          <div className="col-sm-10">
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
        </div>
        <br />
        <div className="px-5 my-5 section-separator "></div>
        <h2>Kinh nghiệm dạy học</h2>
        <div className="row  ">
          <div className="form-group col-md-6">
            <label for="inputAddress" className=" col-form-label fw-bold">
              Bằng cấp cao nhất{" "}
            </label>{" "}
            <select id="inputState" className="form-control  ">
              <option selected>Chọn...</option>
              <option>Cao đẳng</option>
              <option>Đại học</option>
              <option>Thạc sĩ</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Trường{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: Trường ĐH sư phạm Hà Nội"
            />{" "}
          </div>
        </div>
        <div className="row  ">
          <div className="form-group col-md-6">
            <label for="inputAddress" className=" col-form-label fw-bold">
              Bằng cấp lĩnh vực{" "}
            </label>{" "}
            <select id="inputState" className="form-control  ">
              <option selected>Chọn...</option>
              <option>Toán</option>
              <option>Văn</option>
              <option>Lý</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Giấy chứng nhận{" "}
            </label>{" "}
            <UploadPic />
          </div>
        </div>
        <div className="px-5 my-5 section-separator "></div>
        <h2>Giới thiệu bản thân</h2>
        <div className="form-group col-md-12">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Giới thiệu bản thân{" "}
          </label>{" "}
          <form className="mb-4">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Xin chào! Mình là Minh Nguyêt! Mình có 5 năm kinh nghiệm..."
            ></textarea>
          </form>
        </div>
        <div className="form-group col-md-4">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Phương pháp dạy học{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option selected>Chọn...</option>
            <option>Trực tuyến</option>
            <option>Tại nhà</option>
            <option>Cả hai</option>
          </select>
        </div>
        <br />
        <div className="px-5 my-5 section-separator "></div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />

            <label className="form-check-label" for="gridCheck">
              Tôi đồng ý với mọi điều kiện của công ty{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="d-grid">
        <div className="text-center">
          <a
            className="btn btn-outline-success mt-auto"
            href="/TeacherDetailPage"
          >
            Hoàn thành{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UploadInfo;
