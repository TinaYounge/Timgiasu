import React from "react";

function Profile() {
  return (
    <div>
      <div>
        <div className=" align-items-center mt-lg-5 mb-4">
          <img
            className="img-fluid rounded-circle"
            src="https://znews-photo.zadn.vn/w660/Uploaded/rugtzn/2016_02_22/1_WLIC_thumb.jpg"
            alt="..."
          />
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div>
          <div className="ms-3">
            <div className="fw-bold text-center ">Minh Nguyệt</div>
            <div className="text-muted text-center">
              Giáo viên dạy toán trường THPT Thủ Đức
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
