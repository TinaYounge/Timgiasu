import React from "react";
import Filter from "../Filter/Filter";

function SearchBox() {
  return (
    <div>
      <aside className="bg-secondary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
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
            <div className="fs-3 fw-bold text-white">Bạn muốn học môn gì?</div>
            <div className="text-white-50">
              Đăng kí học để lựa chọn được giáo viên tốt nhất.{" "}
            </div>
            <br />
            <div class="input-group mb-2">
              <input
                class="form-control"
                type="text"
                placeholder="Ví dụ: Toán"
                aria-label="Email address..."
                aria-describedby="button-newsletter"
              />
              <button
                class="btn btn-outline-light"
                id="button-newsletter"
                type="button"
              >
                Tìm
              </button>
            </div>
          </div>
          <div className="ms-xl-4">
            <Filter />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SearchBox;
