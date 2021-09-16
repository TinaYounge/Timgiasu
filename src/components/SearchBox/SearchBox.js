import React from "react";

function SearchBox() {
  return (
    <div>
      <div
        className="bg-info bg-gradient

"
      >
        <aside class="  rounded-3  p-sm-2 ">
          <div
            class="
                d-flex
                align-items-center
                justify-content-around
                flex-column flex-xl-row
                text-center text-xl-start
              "
          >
            <div class="mb-4 mb-xl-0">
              <div class="fs-4 fw-bold ">Bạn muốn học môn gì?</div>
              <div class="text-50">
                Đăng kí học để lựa chọn được giáo viên tốt nhất.{" "}
              </div>
            </div>
            <div class="ms-xl-4">
              <div class="input-group mb-2">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Ví dụ: Toán"
                  aria-label="Email address..."
                  aria-describedby="button-newsletter"
                />
                <button
                  class="btn btn-outline-dark"
                  id="button-newsletter"
                  type="button"
                >
                  Tìm
                </button>
              </div>
              <div class="small text-50"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SearchBox;
