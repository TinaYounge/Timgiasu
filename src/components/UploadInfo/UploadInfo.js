import React from "react";
import UploadPic from "../UploadPic/UploadPic";
function UploadInfo() {
  return (
    <div className="py-5 bg-light">
      <div className="container px-5 my-5">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Chào mừng Minh Nguyệt!</h2>
            <p className="lead fw-normal text-muted mb-5">
              Vui lòng điền đầy đủ thông tin theo các bước sau:
            </p>
          </div>
        </div>
        <div class="row">
          <div class="group col-md-6">
            <label for="inputEmail4">Số điện thoại</label>
            <input
              type="tel"
              class="form-control"
              id="inputEmail4"
              placeholder="Ví dụ: 098342673"
            />
          </div>
          <div class="group col-md-3">
            <UploadPic />
          </div>
        </div>
        <div class="group">
          <label for="inputAddress">Địa chỉ liên lạc</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Ví dụ: 12 Đường 3/2"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Địa chỉ công tác hiện tại</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Ví dụ : Trường THPT Thủ Đức"
          />
        </div>
        <div class="row">
          <div class="form-group col-md-3">
            <label for="inputCity">Môn học</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-3">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Phương thức dạy học </label>
            <select id="inputState" class="form-control">
              <option selected>Chọn...</option>
              <option>Trực tuyến</option>
              <option>Tại Nhà</option>
              <option>Cả hai</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <br />

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Tôi đồng ý với mọi điều kiện của công ty{" "}
            </label>
          </div>
        </div>
        <div className=" container ">
          <div
            className="
                d-flex
                align-items-center
                justify-content-between
                flex-column flex-xl-row
                text-center text-xl-start
              "
          >
            <div className="mb-4 mb-xl-0">
              <div className="fs-3 fw-bold ">
                {" "}
                <a
                  className="btn  btn-success btn-lg mt-auto"
                  href="/UploadInfoPage"
                >
                  Trở lại{" "}
                </a>
              </div>
            </div>
            <div className="ms-xl-4">
              {" "}
              <a
                className="btn  btn-success btn-lg mt-auto"
                href="/UploadInfoPage"
              >
                Tiếp theo{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadInfo;
