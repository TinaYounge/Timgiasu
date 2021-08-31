import React from "react";

function SubjectCard() {
  return (
    <div class="col-lg-3  mb-5  px-4 px-lg-5 mt-5 ">
      <div
        class="position-relative mb-5 text-center"
        style={{ backgroundColor: "", borderRadius: "5px" }}
      >
        <img
          class="img-fluid rounded-3 mb-3"
          src="https://i.pinimg.com/564x/dc/2c/48/dc2c482294100808cced408abb9cdf7d.jpg"
          alt="..."
        />
        <a
          class="h5 fw-bolder text-decoration-none link-dark stretched-link"
          href="/"
        >
          Toán học{" "}
        </a>
      </div>
    </div>
  );
}

export default SubjectCard;
