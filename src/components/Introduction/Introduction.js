import React, { useState } from "react";
import "./Style.css";
import { Modal, Button } from "react-bootstrap";
function Example({ picture }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        style={{ width: "200px" }}
        as="button"
        className=" img-thumbnail "
        src={picture}
        alt="profile"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <img className=" img-thumbnail " src={picture} alt="profile" />
      </Modal>
    </>
  );
}

function Introduction({ singleTeacherInfo }) {
  return singleTeacherInfo.youtube ? (
    <div className="" style={{ color: "black" }}>
      <article>
        <header className="mb-2 mt-3">
          <h1 className="fw-bolder mb-1" style={{ padding: "1rem" }}>
            {singleTeacherInfo.fullname}!
          </h1>
          <div className="text-muted fst-italic ">
            {singleTeacherInfo.createdAt}
          </div>
        </header>
        <section className="mb-5">
          <p
            className="fs-5 mb-4"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            {singleTeacherInfo.desc}
          </p>
          <h5 className="fw-bolder mb-1" style={{ padding: "1rem" }}>
            Tại sao chọn mình?
          </h5>
          <p
            className="fs-5 mb-4"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            {singleTeacherInfo.descLong}
          </p>
          <h5 className="fw-bolder mb-1" style={{ padding: "1rem" }}>
            Video
          </h5>
          <iframe
            width="500"
            height="315"
            src={singleTeacherInfo.youtube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 className="fw-bolder mb-1" style={{ padding: "1rem" }}>
            Chứng chỉ
          </h5>

          <div className="row">
            <div className="col">
              {" "}
              <Example picture={singleTeacherInfo.certificate[0]} />
            </div>
            <div className="col">
              {" "}
              <Example picture={singleTeacherInfo.certificate[1]} />
            </div>
          </div>
        </section>
      </article>
    </div>
  ) : (
    <div></div>
  );
}

export default Introduction;
